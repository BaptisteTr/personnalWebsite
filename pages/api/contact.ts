// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

require('dotenv').config()
const PASSWORD = process.env.password
const EMAIL = process.env.email

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 587,
        host: "smtp-relay.sendinblue.com",
        auth: {
            user: EMAIL,
            pass: PASSWORD,
        },
        secureConnection: false,
        tls: {
            ciphers:'SSLv3'
        }
    })

    const mailData = {
        from: req.body.email,
        to: 'contact@baptistetrautmann.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message,
        html: `<div>${req.body.message}</div>`
    }

    transporter.sendMail(mailData, function (err: any, info: any) {
        if(err) {
            console.log(err)
            res.status(500).end();
        }
    })

    res.status(200).end();
    return res;
}
