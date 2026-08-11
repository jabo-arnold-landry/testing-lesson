import mongoose, { Schema } from "mongoose";

const contactsList = new Schema({
  contactName: String,
  phoneNumber: Number,
  email: String,
});

const Contacts = mongoose.model("PhoneBook", contactsList);

export default Contacts;
