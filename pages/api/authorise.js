// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import md5 from "blueimp-md5";
export default async function handler(req, res) {
  const passka = req.body;
  const gnoj = md5(passka);
  const pass_salt = md5(gnoj + process.env.SECRET_SALT);
  const secret = md5(process.env.SECRET_PHRASE + process.env.SECRET_SALT);
  const saltka = process.env.SECRET_SALT;
  const frejska = process.env.SECRET_PHRASE;
  if (pass_salt === secret) {
    res.json({
      success: true,
      data: {
        jwt: process.env.SECRET_PHRASE,
      },
    });
  }
  res.json({
    success: false,
    data: {},
  });
}
