
module.exports = {
  blinkcarbon: {
    smtp: {
      api: process.env.SMTP_API,
      sender: "dpatel3303s@gmail.com",
      replyTo: "dpatel3303s@gmail.com",
      name: "BlinkCarbon"
    },
    sheetUrl: process.env.SHEET_URL_BLINKCARBON
  },

  arham: {
    smtp: {
      api: process.env.SMTP_API,
      sender: "digesh@thebytespark.com",
      replyTo: "digesh@thebytespark.com",
      name: "Arham Tax Consultancy"
    },
    sheetUrl: process.env.SHEET_URL_ARHAM
  }
};


// module.exports = {
//   blinkcarbon: {
//     smtp: {
//       api: process.env.SMTP_API,
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//       sender: "digesh@thebytespark.com",
//       replyTo: "digesh@thebytespark.com",
//       name: "BlinkCarbon",
//     },
//     sheetUrl: process.env.SHEET_URL_BLINKCARBON  // ← add this
//   },
//   arham: {
//     smtp: {
//       api: process.env.SMTP_API,
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//       sender: "digesh@thebytespark.com",
//       replyTo: "digesh@thebytespark.com",
//       name: "BlinkCarbon",
//     },
//     sheetUrl: process.env.SHEET_URL_ARHAM
//   }
// };
