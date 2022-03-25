// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  console.log("STRAPEY", process.env.STRAPI_TOKEN);
  const do_it = await fetch(
    process.env.STRAPI_URL + "/api/front-page?populate=*",
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    }
  );
  console.log("RESKA", do_it);
  const ferlough = await do_it.json();

  res.send(ferlough.data);

  res.send("Error");
}
