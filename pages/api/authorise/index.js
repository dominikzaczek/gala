import md5 from "blueimp-md5";
import Cookies from "cookies";

export default async function handler(req, res) {
  const passka = req.body;
  console.log("PASSKO", passka);
  if (passka.password === "GPA2022!@!") {
    // const cookies = new Cookies(req, res);
    return res.json({
      success: true,
      data: {
        status: "authorised",
      },
    });
  }
  return res.status(401).json({
    success: false,
    data: {},
  });
}
