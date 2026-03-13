const axios = require("axios");

const saveToSheet = async (sheetUrl, data) => {
  // Apps Script expects FormData, so we convert JSON to URLSearchParams
  const params = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => {
    params.append(key, value ?? "");
  });

  return axios.post(sheetUrl, params.toString(), {
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
};

module.exports = saveToSheet;