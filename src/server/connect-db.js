import { MongoClient } from "../../node_modules/mongodb";
const url = process.env.MONGODB_URI || `mongodb://localhost:27017/kitchenDB`;
let db = null;

export async function connectDB() {
  if (db) return db; //if already defined
  let client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db(); //define DB
  console.log("DB is running", db);
  return db;
}

connectDB();