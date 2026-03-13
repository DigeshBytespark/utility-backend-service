const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sheetRoutes = require("./routes/sheet");
const emailRoutes = require("./routes/email");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" })); // limit for base64 pdf

app.use("/api/email", emailRoutes);
app.use("/api/sheet", sheetRoutes);

app.get("/", (req, res) => res.send("Utility Backend Running"));

app.listen(5000, () => console.log("Server running on port 5000"));