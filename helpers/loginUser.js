import { pages } from "../po/pages";
import { registerUser } from "./registerUser";

export async function loginUser(user) {
  const loginForm = pages("login").loginForm;

  await registerUser(user);

  await pages("login").open();

  await loginForm.input("email").setValue(user.email);
  await loginForm.input("password").setValue(user.password);

  await loginForm.loginBtn.click();
}
