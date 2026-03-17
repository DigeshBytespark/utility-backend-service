const express = require("express");
const router = express.Router();
const projects = require("../config/projects");
const { sendEmail } = require("../services/mailService");

router.post("/send-email", async (req, res) => {
  const { project, from, to, subject, html, pdf } = req.body || {};

  // Validation
  if (!project || !from || !to || !subject || !html) {
    return res.status(400).json({
      success: false,
      message: "project, from, to, subject, html are required.",
    });
  }

  const config = projects[project];

  if (!config) {
    return res.status(400).json({
      success: false,
      message: `Unknown project: ${project}`,
    });
  }

  try {
    const result = await sendEmail(config.smtp, {
      from,
      to,
      subject,
      html,
      pdf,
    });

    res.json({
      success: true,
      message: "Email sent successfully",
      messageId: result.messageId || null,
    });
  } catch (error) {
    console.error("Email sending failed:", error?.response?.data || error);

    res.status(500).json({
      success: false,
      message: error?.response?.data?.message || error.message,
    });
  }
});

module.exports = router;