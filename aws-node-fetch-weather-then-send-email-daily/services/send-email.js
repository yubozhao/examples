import * as bluebird from 'bluebird';
import nodemailer from 'nodemailer';

export default (info) => {
  const transporter = nodemailer.createTransport({
    host: process.env.smtpHost,
    port: process.env.smtpPort,
    secure: true,
    auth: {
      user: process.env.smtpUser,
      pass: process.env.smtpPass,
    },
  });

  bluebird.promisifyAll(transporter);
  const email = Object.assign(info, {
    from: process.env.from,
    to: process.env.to,
    subject: process.env.subject,
  });

  return transporter.sendMailAsync(email)
    .then(res => bluebird.resolve(res.response))
    .catch((err) => {
      throw err;
    });
};
