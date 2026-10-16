export async function onRequestGet({ env }) {
  return Response.json({
    ok: true,
    database: Boolean(env.DB)
  });
}
