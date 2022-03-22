// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const do_it = await fetch(
    process.env.STRAPI_URL + "/api/front-page?populate=*",
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    }
  );
  if (do_it.ok) {
    const ferlough = await do_it.json();
    res.send(ferlough.data);
  }
  res.send("Error");
}
