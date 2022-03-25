import qs from "querystring";

export default async function handler(req, res) {
  const passka = req.body.split("=")[1];
  if (passka === process.env.TRUE_SECRET_PASS) {
    return res.json({
      success: true,
      data: {
        jwt: process.env.TRUE_SECRET_PASS,
      },
    });
  } else if (passka) {
    console.log("Password was wrong!");
  }
  return res.json({
    success: false,
    data: {},
  });
}
