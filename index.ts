import express from "express";
import cors from "cors";
import { config } from "./config";
const { ParseServer } = require("parse-server");

const app = express();

// ✅ Stronger CORS setup for mobile + Parse requests
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "X-Parse-Application-Id",
    "X-Parse-REST-API-Key",
    "X-Parse-Session-Token",
  ],
}));

// ✅ Initialize Parse Server
const parseServer = new ParseServer({
  databaseURI: config.databaseURI,
  appId: config.appId,
  masterKey: config.masterKey,
  serverURL: config.serverURL,
  allowClientClassCreation: config.allowClientClassCreation,
  maintenanceKey: config.maintenanceKey,   

  javascriptKey: config.javascriptKey,
  restAPIKey: config.restAPIKey,
  clientKey: config.clientKey,
});

(async () => {
  try {
    await parseServer.start();
    console.log("✅ Parse Server started successfully");

    app.use("/parse", parseServer.app);

    const PORT = process.env.PORT || 1337;
    app.listen(PORT, () => {
      console.log(`✅ Running at ${config.serverURL}`);
    });
  } catch (err) {
    console.error("❌ Failed to start Parse Server:", err);
    process.exit(1);
  }
})();
