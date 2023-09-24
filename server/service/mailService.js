const nodemailer = require('nodemailer')
class MailService{

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth:{
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD

            }
        })
    }
    async sendActivationMail(to, link){
        await  this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на Merop',
            text: '',
            html:
            `
            <div>
                <h1>Для активации перейдите по ссылке</h1>
                <a href="${link}">${link}</a>
                <h1></h1>
                <h4>Если вы не создавали аккаунт, просто не нажимайте на ссылку</h4>
            </div>
            `
        })
    }


}
module.exports = new MailService();