import qs from "querystring";

export default async function handler(req, res) {
  console.log(req.body);
  const passka = req.body.split("=")[1];
  const passka0 = passka.split(";").length > 1 ? passka.split(";")[0] : passka;
  console.log("PASSKA HERE", passka);
  if (passka0 === process.env.TRUE_SECRET_PASS) {
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
