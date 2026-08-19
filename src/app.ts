import express from "express";
import addContacts from "./controllers/add-contacts.controller";

const app = express()

app.use(express.json())
app.post("/add-contacts", addContacts);

export default app;
