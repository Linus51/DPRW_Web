import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export function mailer() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
}

function loadTemplate(file: string) {
  const p = path.join(process.cwd(), "templates", "email", file);
  return fs.readFileSync(p, "utf8");
}

export function renderTemplate(name: string, vars: Record<string, string>) {
  const html = loadTemplate(name + ".html");
  const text = loadTemplate(name + ".txt");
  const replace = (s: string) =>
    s.replace(/{{\s*([a-zA-Z0-9_]+)\s*}}/g, (_, k) => (vars[k] ?? ""));
  return { html: replace(html), text: replace(text) };
}