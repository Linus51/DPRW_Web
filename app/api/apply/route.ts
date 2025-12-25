import { prisma } from "@/lib/prisma";
import { mailer, renderTemplate } from "@/lib/email";
import { sendDiscordWebhook } from "@/lib/discord";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const data = Object.fromEntries(form.entries()) as Record<string, string>;
    const { name = "", email = "", message = "", age = "" } = data;

    // In DB speichern (Application muss existieren)
    const app = await prisma.application.create({
      data: { name, email, message, age },
    });

    const SITE_NAME = process.env.SITE_NAME || "DPRW";
    const SITE_URL = process.env.SITE_URL || "http://46.4.38.161:3000";

    // E-Mail an Bewerber
    try {
      const transport = mailer();
      const vars = {
        NAME: name,
        EMAIL: email,
        AGE: age,
        MESSAGE: message,
        SITE_NAME,
        SITE_URL,
        YEAR: String(new Date().getFullYear()),
      };
      const tpl = renderTemplate("application-confirmation", vars);
      await transport.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: `[${SITE_NAME}] Bewerbung erhalten`,
        text: tpl.text,
        html: tpl.html,
      });
    } catch (e) {
      console.error("Mail to applicant failed:", e);
    }

    // E-Mail an Admin (optional)
    try {
      if (process.env.ADMIN_NOTIFY_EMAIL) {
        const transport = mailer();
        const vars = {
          NAME: name,
          EMAIL: email,
          AGE: age,
          MESSAGE: message,
          ADMIN_URL: `${SITE_URL}/admin`,
        };
        const tpl = renderTemplate("application-admin", vars);
        await transport.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: process.env.ADMIN_NOTIFY_EMAIL,
          subject: `[${SITE_NAME}] Neue Bewerbung`,
          text: tpl.text,
          html: tpl.html,
        });
      }
    } catch (e) {
      console.error("Mail to admin failed:", e);
    }

    // Discord Webhook
    try {
      const content = `**Neue Bewerbung**\nName: ${name}\nE-Mail: ${email}\nAlter: ${age}`;
      const embeds = [{ description: message?.slice(0, 1900) || "" }];
      await sendDiscordWebhook(content, embeds);
    } catch (e) {
      console.error("Discord webhook failed:", e);
    }

    return Response.json({ ok: true, id: app.id });
  } catch (e: any) {
    console.error(e);
    return new Response(
      JSON.stringify({ ok: false, error: e?.message || "Fehler" }),
      { status: e?.status || 500 }
    );
  }
}