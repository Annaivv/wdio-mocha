import { userData } from "../data/userData";
import { generateUniqueEmail } from "./generateUniqueEmail";

export function createTestUser() {
  return { ...userData, email: generateUniqueEmail() };
}
