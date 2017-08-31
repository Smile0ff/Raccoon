const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS 
    }
});

const verify = () => {
    return new Promise((resolve, reject) => {
        transporter.verify((error, success) => !error ? resolve(success) : reject(error));
    });
}

const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.RECIPIENT,
    subject: 'New message | Raccoon.World'
}

const send = (html) => {

    return new Promise((resolve, reject) => {
        let options = Object.assign({}, mailOptions, { html })

        transporter.sendMail(options, (err, info) => {
            if(err) return reject(err);

            resolve();

            transport.close();
        });

    });

}

module.exports = {
    verify,
    send
}