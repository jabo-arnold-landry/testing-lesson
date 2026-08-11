import express from "express";
import { loadEnvFile } from "node:process";
import connectToDB from "../config/dbConfig";

const app = express();
loadEnvFile();
async function dbConnection() {
  await connectToDB();
}
dbConnection();

app.listen(5000, () => console.log("the server successfully connected"));
