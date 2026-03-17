const axios = require("axios");

const sendEmail = async (smtpConfig, { from, to, subject, html, pdf }) => {
  const senderEmail = smtpConfig.user;   // your verified Brevo email
  const apiKey = smtpConfig.api;        // BREVO API KEY

  const payload = {
    sender: {
      email: senderEmail,
      name: from?.split("<")[0]?.trim() || "No Reply",
    },
    to: [{ email: to }],
    subject,
    htmlContent: html,
  };

  // Attach PDF if present
  if (pdf) {
    payload.attachment = [
      {
        content: pdf, // base64 string
        name: "Carbon Credit Estimation Report.pdf",
      },
    ];
  }

  const response = await axios.post(
    "https://api.brevo.com/v3/smtp/email",
    payload,
    {
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

module.exports = {
  sendEmail,
};