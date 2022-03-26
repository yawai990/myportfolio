const bodyParser = require('body-parser');
const cors = require('cors')
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const dotenv = require('dotenv');

const PORT = process.env.PORT || 5000;

dotenv.config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.post('/sendmail', async (req, res) => {

    const { name, email, message, subject } = req.body;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.AUTH_EMAIL,
            pass: process.env.AUTH_PASS
        }
    });

    var mailOptions = {
        from: email,
        to: process.env.TO_EMAIL,
        subject: `${subject} from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log('email send')
            const { enveloperTime } = info;

            setTimeout(() => {

                var mailOptions = {
                    from: 'yawaiaung.developer@gmail.com',
                    to: email,
                    subject: `Greeting from Yawai`,
                    text: `Hello ${name},I received your email.Thank you for your time.
                    I hope we'll see soon.`
                };
                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) throw err;

                    console.log('email resend')
                })
            }, 7200000)

        }
    })
})

app.listen(PORT, () => {
    console.log(`server run in port ${PORT}`)
})