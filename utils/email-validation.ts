export default function validateEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    return true;
  } else {
    throw new Error("Invalid email format");
  }
}
