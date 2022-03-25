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

  const ferlough = await do_it.json();
  console.log("RESKA", ferlough);

  res.send(ferlough.data);

  res.send("Error");
}
