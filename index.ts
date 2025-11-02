import express from "express";
import cors from "cors";
const { ParseServer } = require("parse-server");
import { config } from "./config";

const app = express();

app.use(cors({
  origin: ["*"],
  credentials: true,
}));

const parseServer = new ParseServer({
  databaseURI: config.databaseURI,
  appId: config.appId,
  masterKey: config.masterKey,
  serverURL: config.serverURL,
  allowClientClassCreation: config.allowClientClassCreation,
  maintenanceKey: config.maintenanceKey,
});

(async () => {
  try {
    await parseServer.start();
    console.log("✅ Parse Server started successfully");

    app.use("/parse", parseServer.app);

    const PORT = process.env.PORT || 1337;
    app.listen(PORT, () => {
      console.log(`✅ Running at http://localhost:${PORT}/parse`);
    });
  } catch (err) {
    console.error("❌ Failed to start Parse Server:", err);
    process.exit(1);
  }
})();
