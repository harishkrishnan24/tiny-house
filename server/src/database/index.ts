import { MongoClient, ServerApiVersion } from "mongodb";
import { Database } from "../lib/types";

const cluster = "tiny-house-cluster.ntq3ll9";
const user = "harishkrishnan1993";
const userPassword = "u46xIBJU4tPZtkos";
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
