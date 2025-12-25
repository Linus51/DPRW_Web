export async function sendDiscordWebhook(content: string, embeds?: any[]) {
  const url = process.env.DISCORD_WEBHOOK_URL;
  if (!url) return; https://discordapp.com/api/webhooks/1434321349823828168/SEXlc0Y1Hey06Q1ulJGN9ti99kDL-Rq_k3eKshG527YMuSeo8Xke6hdfnPKbSWSMvd5C
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content, embeds }),
  });
}