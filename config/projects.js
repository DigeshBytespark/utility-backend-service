module.exports = {
  blinkcarbon: {
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    sheetUrl: process.env.SHEET_URL_BLINKCARBON  // ← add this
  }
};
