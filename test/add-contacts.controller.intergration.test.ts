import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import app from "../src/app";
import request from "supertest";
import Contacts from "../schema/contactList";

describe("intergration test for add contact api", () => {
  let mongoServer: MongoMemoryServer;
  let server: any;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
    server = app.listen(0);
  });

  afterAll(async () => {
    mongoServer.stop();
    mongoose.disconnect();
    server.close();
  });

  const fakeContact = {
    contactName: "arnold",
    phoneNumber: 798600102,
    email: "arnoldjabo@gmail.com",
  };

  describe("POST /add-contacts", () => {
    it("creates a new records to the database", async () => {
      const response = await request(app)
        .post("/add-contacts")
        .send(fakeContact);

      const contactList = await Contacts.findOne({
        email: "arnoldjabo@gmail.com",
      })!;
      expect(contactList?.email).toBe("arnoldjabo@gmail.com");
      console.log(contactList);

      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        message: `successfully created ${fakeContact.contactName}`,
      });
    });
  });
});
