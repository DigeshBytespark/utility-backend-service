const nodemailer = require("nodemailer");

const createTransporter = (smtpConfig) =>
  nodemailer.createTransport({
    host: smtpConfig.host,
    port: Number(smtpConfig.port),
    secure: Number(smtpConfig.port) === 465,
    auth:
      smtpConfig.user && smtpConfig.pass
        ? {
            user: smtpConfig.user,
            pass: smtpConfig.pass,
          }
        : undefined,
  });

const sendEmail = async (smtpConfig, { from, to, subject, html, pdf }) => {
  const transporter = createTransporter(smtpConfig);

  const mailOptions = {
    from,
    to,
    subject,
    html,
    ...(pdf
      ? {
          attachments: [
            {
              filename: "Carbon Credit Estimation Report.pdf",
              content: pdf,
              encoding: "base64",
            },
          ],
        }
      : {}),
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendEmail,
};
