const express = require("express");
const router = express.Router();
const projects = require("../config/projects");
const saveToSheet = require("../services/sheets");

router.post("/save-sheet", async (req, res) => {
  const { project, data } = req.body || {};

  if (!project || !data) {
    return res.status(400).json({
      success: false,
      message: "project and data are required."
    });
  }

  const config = projects[project];
  if (!config) {
    return res.status(400).json({
      success: false,
      message: `Unknown project: ${project}`
    });
  }

  try {
    await saveToSheet(config.sheetUrl, data);
    res.json({ success: true, message: "Data saved to sheet." });
  } catch (error) {
    console.error("Sheet save failed:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Sheet save failed"
    });
  }
});

module.exports = router;