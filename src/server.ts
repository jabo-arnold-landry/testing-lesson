import express from "express";
import { loadEnvFile } from "node:process";
import connectToDB from "../config/dbConfig";
import addContacts from "./controllers/add-contacts.controller";

const app = express();
loadEnvFile();
async function dbConnection() {
  await connectToDB();
}
dbConnection();

app.use(express.json());
app.post("/add-contacts", addContacts);
app.listen(5000, () => console.log("the server successfully connected"));
