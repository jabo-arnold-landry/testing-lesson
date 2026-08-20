import Contacts from "../../schema/contactList";
import { Request, Response } from "express";
import validateEmail from "../../utils/email-validation";

async function addContacts(req: Request, res: Response) {
  const { contactName, phoneNumber, email } = req.body;
  validateEmail(email);

  const contact = await Contacts.create({ contactName, phoneNumber, email });
  return res
    .status(201)
    .json({ message: `successfully created ${contact.contactName}` });
}

export default addContacts;
