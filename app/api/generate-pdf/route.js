export async function POST(request) {
  try {
    const { html } = await request.json();
    return new Response(JSON.stringify({ html }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}