const { createServer } = require("cors-anywhere");

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [],
  removeHeaders: [],
  setHeaders: {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  },
}).listen(port, host, function () {
  console.log("Running CORS Anywhere on " + host + "::" + port);
});
