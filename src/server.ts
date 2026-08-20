import { loadEnvFile } from "node:process";
import connectToDB from "../config/dbConfig";
import app from "./app";

loadEnvFile();
async function bootsrap() {
  await connectToDB();
  app.listen(5000, () => console.log("the server successfully connected"));
}
bootsrap();
