import { MongoClient, ServerApiVersion } from "mongodb";
import { Database } from "../lib/types";

const cluster = process.env.DB_CLUSTER;
const user = process.env.DB_USER;
const userPassword = process.env.DB_USER_PASSWORD;
const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  const db = client.db("main");

  return {
    listings: db.collection("test_listings"),
  };
};
