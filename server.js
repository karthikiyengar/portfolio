const express = require("express");
const bodyParser = require("body-parser");
const Recaptcha = require("recaptcha2");
const next = require("next");
const helmet = require("helmet");
const compression = require("compression");
const validator = require("validator");
const mailgun = require("mailgun-js")({
  apiKey: "key-1b1cefdf780514ca200edd4335c92e9f",
  domain: "mg.karthikiyengar.in"
});

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const recaptcha = new Recaptcha({
  siteKey: "6LfSgSEUAAAAAEWLKRlaKBg-jC6WIDfFRqaso05L",
  secretKey: "6LfSgSEUAAAAAC-eJ0Qv5ZJ6ajSXgokCyxyAOJC_"
});

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(helmet());
  server.use(compression());

  server.post("/api/message", (req, res) => {
    if (
      !req.body.captcha ||
      !req.body.message ||
      !req.body.email ||
      !req.body.name
    ) {
      res.status(400).send("Bad Request");
    }
    if (!validator.isLength(req.body.message, { min: 3, max: 300 })) {
      res.status(400).send("Bad Request");
    }
    if (!validator.isLength(req.body.name, { min: 3, max: 30 })) {
      res.status(400).send("Bad Request");
    }
    if (!validator.isEmail(req.body.email)) {
      res.status(400).send("Bad Request");
    }
    recaptcha
      .validate(req.body.captcha)
      .then(() => {
        mailgun.messages().send(
          {
            from: "info@karthikiyengar.in",
            to: "karthikeyan.iyengar@gmail.com",
            subject: `Message from ${req.body.name}`,
            html: `
            <b>Sender Address: ${req.body.email}</b>
            <br />
            <b>Sender Name: ${req.body.name}</b>
            <br /> 
            <p>${req.body.message}</p>
          `
          },
          err => {
            if (err) {
              res.status(400).send("Could not send email");
            }
            res.send("Success");
          }
        );
      })
      .catch(() => {
        res.status(400).send("Could not validate reCAPTCHA");
      });
  });

  server.get("*", (req, res) => handle(req, res));

  const port = process.env.NODE_ENV === "production" ? 80 : 3000;

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
