import md5 from "blueimp-md5";
import Cookies from "cookies";

export default async function handler(req, res) {
  const passka = req.body;
  const pass_salt = md5(passka + process.env.SECRET_SALT);
  if (pass_salt === process.env.TRUE_SECRET_PASS) {
    const cookies = new Cookies(req, res);
    cookies.set("jwt", process.env.TRUE_SECRET_PASS);
    return res.json({
      success: true,
      data: {},
    });
  }
  return res.status(401).json({
    success: false,
    data: {},
  });
}
