const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const compression = require("compression");
const app = express();

app.use(
  express.json({
    limit: "5mb",
    strict: false,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(xss());
app.use(compression());

if (process.env.NODE_ENV === "production") {
  app.use(
    cors({
      origin: "https://www.bayhawk.cc",
    })
  );
} else {
  app.use(cors());
}

app.use(
  "/api",
  rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 500, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP...",
  })
);

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// app.use("/api/v1/email", emailRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
