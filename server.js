'use strict';
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

transporter.verify((err, success) => {
    err
        ?
        console.log(err) :
        console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.get("/", function (req, res) {
  res.send("<h1>Hello, we are HRFO</h1>")
})

app.post("/send", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let mailOptions = {
        from: process.env.EMAIL,
        to: `maivannhatminh2005@gmail.com`,
        subject: `New user notification!🥳`,
        text: `:>`,
        html: `
        Hello Director,
        A new user signs up: <br/>
        Mail : ${req.body.inputValues.email}; <br/>
        Name: ${req.body.inputValues.name}; <br/>
        Message: ${req.body.inputValues.message}
        `
    };
   
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          res.json({
            status: "fail",
          });
        } else {
          console.log("== Message Sent ==");
          res.json({
            status: "success",
          });
        }
      });
   });

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
