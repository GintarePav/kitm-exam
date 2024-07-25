const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: `${__dirname}/config.env` });

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:3000", // Replace with your Vercel URL in production
  credentials: true,
  methods: ["GET", "OPTIONS", "PATCH", "DELETE", "POST", "PUT"],
  allowedHeaders: [
    "X-CSRF-Token",
    "X-Requested-With",
    "Accept",
    "Accept-Version",
    "Content-Length",
    "Content-MD5",
    "Content-Type",
    "Date",
    "X-Api-Version",
    "Authorization",
  ],
};

app.use(cors(corsOptions));

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

// Route definitions
app.use("/api/v1/users");
app.use("/api/v1/dishes");

// Root route for verification when setting up Render
app.get("/", (req, res) => res.send("Your backend is going well"));

module.exports = app;
