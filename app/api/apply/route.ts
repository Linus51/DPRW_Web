export async function POST(req: Request) {
  const form = await req.formData();
  const data = Object.fromEntries(form.entries());
  console.log("DPRW Bewerbung:", data);
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
