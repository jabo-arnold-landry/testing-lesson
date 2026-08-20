import { describe, it, expect } from "vitest";
import validateEmail from "../utils/email-validation";

describe("email validation test suites", () => {
  it("must define email validation function", () => {
    expect(validateEmail).toBeDefined();
  });

  it("must define email validation function", () => {
    expect(validateEmail).toBeDefined();
  });

  it("returns true for valid email", () => {
    const sampleEmail = "arnoldjabo@gmail.com";
    expect(validateEmail(sampleEmail)).toBeTruthy();
  });

  it("throws error for invalid email", () => {
    const sampleEmail = "verymasd.com";
    const invalidEmailResults = () => validateEmail(sampleEmail);
    expect(invalidEmailResults).toThrow("Invalid email format");
  });
});
