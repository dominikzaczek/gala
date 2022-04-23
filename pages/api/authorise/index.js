import md5 from "blueimp-md5";

export default async function handler(req, res) {
  const passka = req.body;
  if (md5(passka.password) === "3c5f06259c5a8d5820c55187c005cd49") {
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
