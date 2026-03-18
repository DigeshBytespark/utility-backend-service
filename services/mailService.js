const axios = require("axios");

const sendEmail = async (smtpConfig, { from, to, subject, html, pdf }) => {
  const apiKey = smtpConfig.api;

  const payload = {
    sender: {
      email: smtpConfig.sender,   // ✅ project-based sender
      name: smtpConfig.name || from?.split("<")[0]?.trim() || "No Reply",
    },

    // ✅ reply-to support
    replyTo: smtpConfig.replyTo
      ? { email: smtpConfig.replyTo }
      : undefined,

    to: [{ email: to }],
    subject,
    htmlContent: html,
  };

  // Attach PDF if present
  if (pdf) {
    payload.attachment = [
      {
        content: pdf,
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

  console.log("BREVO RESPONSE:", response.data);
  return response.data;
};

module.exports = {
  sendEmail,
};