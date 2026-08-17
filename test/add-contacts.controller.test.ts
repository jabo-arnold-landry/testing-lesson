import { describe, expect, it, vi } from "vitest";
import mockinggoose from "mockingoose";
import Contacts from "../schema/contactList";
import addContacts from "../src/controllers/add-contacts.controller";
import { type Response, type Request } from "express";

vi.mock("../utils/email-validation", () => {
  return { default: vi.fn().mockReturnValue(true) };
});
import validateEmail from "../utils/email-validation";
const fakeContact = {
  contactName: "arnold",
  phoneNumber: 798600102,
  email: "arnoldjabo@gmail.com",
};
describe("Add contacts to the database", async () => {
  it("successfully create a new contact to the database", async () => {
    mockinggoose(Contacts).toReturn(fakeContact, "save");

    const req = {
      body: fakeContact,
    } as Request;

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as any as Response;

    await addContacts(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: `successfully created ${fakeContact.contactName}`,
    });
  });

  it("throws error for the wrong email address", async () => {
    const req = {
      body: { ...fakeContact, email: "fakemail" },
    } as Request;

    (validateEmail as ReturnType<typeof vi.fn>).mockImplementation(() => {
      throw new Error("invalid email!");
    });

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as any as Response;
    await expect(addContacts(req, res)).rejects.toThrow();
  });
});
