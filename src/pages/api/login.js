const axios = require("axios");

export default async function handler(req, res) {
  let userId = req.body.id;
  let userPassword = req.body.password;

  if (userId === "") {
    res.status(200).json({ success: false, msg: "Enter Your Id" });
  } else if (userPassword === "") {
    res.status(200).json({ success: false, msg: "Enter Your Password" });
  }

  if (userId === "wulovesk@naver.com" && userPassword === "wooyong") {
    res.status(200).json({ success: true, msg: "Succesfully Login" });
  } else if (userId === "wulovesk@naver.com" && userPassword != "wooyong") {
    res.status(200).json({ success: false, msg: "Password Not Matched" });
  } else {
    res.status(200).json({ success: false, msg: "Id Does not Exist" });
  }
}
