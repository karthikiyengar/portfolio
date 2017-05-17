const express = require('express');
const bodyParser = require('body-parser');
const Recaptcha = require('recaptcha2');
const next = require('next');
const validator = require('validator');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


const recaptcha = new Recaptcha({
  siteKey: '6LfSgSEUAAAAAEWLKRlaKBg-jC6WIDfFRqaso05L',
  secretKey: '6LfSgSEUAAAAAC-eJ0Qv5ZJ6ajSXgokCyxyAOJC_',
});


app.prepare()
.then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.post('/api/message', (req, res) => {
    if (!req.body.captcha || !req.body.message || !req.body.email || !req.body.name) {
      res.status(400).send('Bad Request');
    }
    if (!validator.isLength(req.body.message, { min: 3, max: 300 })) {
      res.status(400).send('Bad Request');
    }
    if (!validator.isLength(req.body.name, { min: 3, max: 30 })) {
      res.status(400).send('Bad Request');
    }
    if (!validator.isEmail(req.body.email)) {
      res.status(400).send('Bad Request');
    }
    recaptcha.validate(req.body.captcha)
      .then(() => {
        res.send('Success');
      }).catch(() => {
        res.status(400).send('Could not validate reCAPTCHA');
      });
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
