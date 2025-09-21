import { RetryAfterError } from 'inngest';
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendMail = async ({to, subject, body}) => {
    const response = await transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to,
        subject,
        html: body,

    })
    return response
}

export default sendMail