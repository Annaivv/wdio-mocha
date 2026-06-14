import { userData } from "../data/userData";

export function generateUniqueEmail() {
  const uniqueEmail = `test${Date.now()}@newmail.com`;
  userData.email = uniqueEmail;
  return uniqueEmail;
}
