module.exports = {
  blinkcarbon: {
    smtp: {
      api: process.env.SMTP_API,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    sheetUrl: process.env.SHEET_URL_BLINKCARBON  // ← add this
  },
  arham: {
    smtp: {
      api: process.env.SMTP_API,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    sheetUrl: process.env.SHEET_URL_ARHAM
  }
};
