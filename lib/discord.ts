export async function sendDiscordWebhook(content: string, embeds?: any[]) {
  const url = process.env.DISCORD_WEBHOOK_URL;
  if (!url) return; // optional
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content, embeds }),
  });
}