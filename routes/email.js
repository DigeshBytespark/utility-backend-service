const express = require("express");
const router = express.Router();
const projects = require("../config/projects");
const { sendEmail } = require("../services/mailService");

router.post("/send-email", async (req, res) => {
  const { project, from, to, subject, html, pdf } = req.body || {};

  // Basic validation
  if (!project || !from || !to || !subject || !html) {
    return res.status(400).json({
      success: false,
      message: "project, from, to, subject, html are required.",
    });
  }

  // Check project exists in config
  const config = projects[project];
  if (!config) {
    return res.status(400).json({
      success: false,
      message: `Unknown project: ${project}`,
    });
  }

  try {
    const info = await sendEmail(config.smtp, { from, to, subject, html, pdf });
    res.json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId || null,
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Email sending failed",
    });
  }
});

module.exports = router;
