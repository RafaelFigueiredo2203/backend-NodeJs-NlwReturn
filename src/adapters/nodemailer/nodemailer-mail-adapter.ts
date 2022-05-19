import { SendMailData, MailAdapter } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a98463a2d1a85c",
    pass: "1156b933fa966f"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject , body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Rafael Figueiredo <rafaelfigueiredojunior7@gmail.com>',
      subject,
      html:body,
    });
  }
}