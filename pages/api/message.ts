const validator = require("validator");
const mailgun = require("mailgun-js")({
  apiKey: "key-1b1cefdf780514ca200edd4335c92e9f",
  domain: "mg.karthikiyengar.in",
});
const Recaptcha = require("recaptcha2");
const recaptcha = new Recaptcha({
  siteKey: "6LfSgSEUAAAAAEWLKRlaKBg-jC6WIDfFRqaso05L",
  secretKey: "6LfSgSEUAAAAAC-eJ0Qv5ZJ6ajSXgokCyxyAOJC_",
});

export default (req, res) => {
  if (
    !req.body.captcha ||
    !req.body.message ||
    !req.body.email ||
    !req.body.name
  ) {
    return res.status(400).send("Bad Request");
  }
  if (!validator.isLength(req.body.message, { min: 3, max: 300 })) {
    return res.status(400).send("Bad Request");
  }
  if (!validator.isLength(req.body.name, { min: 3, max: 30 })) {
    return res.status(400).send("Bad Request");
  }
  if (!validator.isEmail(req.body.email)) {
    return res.status(400).send("Bad Request");
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
          `,
        },
        (err) => {
          if (err) {
            return res.status(400).send("Could not send email");
          }
          return res.send("Success");
        }
      );
    })
    .catch(() => {
      return res.status(400).send("Could not validate reCAPTCHA");
    });
};
