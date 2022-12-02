import { createServer } from "cors-anywhere";

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [],
  removeHeaders: [],
  setHeaders: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Content-Length, X-Requested-With",
  },
}).listen(port, host, function () {
  console.log("Running CORS Anywhere on " + host + "::" + port);
});
