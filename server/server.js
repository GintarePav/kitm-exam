const mongoose = require("mongoose");
const app = require("./index");
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/config.env` });

const port = process.env.PORT || 8080;
const host = process.env.HOST || "0.0.0.0";
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log("Connected to DB."))
  .catch((err) => console.error("Database connection error:", err));

app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
