import Contacts from "../../schema/contactList";
import { Request, Response } from "express";
import validateEmail from "../../utils/email-validation";

async function addContacts(req: Request, res: Response) {
  try {
    const { contactName, phoneNumber, email } = req.body;
    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      res.status(400).json({ message: "The email is invalid" });
      return;
    }
    const contact = await Contacts.create({ contactName, phoneNumber, email });
    return res
      .status(201)
      .json({ message: `successfully created ${contact.contactName}` });
  } catch (err) {
    console.log(err);
    return;
  }
}

export default addContacts;
