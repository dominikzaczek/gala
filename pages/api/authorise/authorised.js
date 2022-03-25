// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import md5 from "blueimp-md5";
export default async function handler(req, res) {
  const passka = req.body;
  console.log(passka);
  if (passka === process.env.TRUE_SECRET_PASS) {
    return res.json({
      success: true,
      data: {
        jwt: process.env.TRUE_SECRET_PASS,
      },
    });
  }
  return res.json({
    success: false,
    data: {},
  });
}
