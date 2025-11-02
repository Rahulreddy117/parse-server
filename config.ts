import dotenv from "dotenv";
dotenv.config();

export const config = {
  databaseURI: process.env.DATABASE_URI!,
  appId: process.env.APP_ID!,
  masterKey: process.env.MASTER_KEY!,
  serverURL: process.env.SERVER_URL!,
  allowClientClassCreation: true,
  maintenanceKey: process.env.MAINTENANCE_KEY!,

  // ✅ Add these keys for client apps (Parse JS SDK)
  javascriptKey: process.env.JAVASCRIPT_KEY || "default-js-key",
  restAPIKey: process.env.REST_API_KEY || "default-rest-api-key",
  clientKey: process.env.CLIENT_KEY || "default-client-key",
};
