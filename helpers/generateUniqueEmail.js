import { userData } from "../data/userData";

export function generateUniqueEmail() {
  const uniqueEmail = `test${Date.now()}@newmail.com`;
  return uniqueEmail;
}
