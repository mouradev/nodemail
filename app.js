var nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var sender = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    service: process.env.SMTP_SERVICE,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE == 'true' ? true : false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

console.log(process.env);
// return false;

var mail = {
    from: process.env.FROM_EMAIL,
    to: 'lucas@homemmaquina.com.br',
    cc: [],
    subject: 'Enviando emails com Node.js',
    text: 'Hello World! enviado via node.js com nodemailer.'
};

sender.sendMail(mail, function(error) {
    if(error) {
        console.log(error);
    }else {
        console.log('Email sended as a success');
    }
});