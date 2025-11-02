import dotenv from "dotenv";
dotenv.config();

export const config = {
  databaseURI: process.env.DATABASE_URI!,
  appId: process.env.APP_ID!,
  masterKey: process.env.MASTER_KEY!,
  serverURL: process.env.SERVER_URL!,
  allowClientClassCreation: true,
  maintenanceKey: process.env.MAINTENANCE_KEY!,
};
