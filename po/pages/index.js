import { Homepage } from "./home.page";
import { SignupPage } from "./signup.page";
import { LoginPage } from "./login.page";

/**
 * @param {"home" | "signup" | "login"} name
 * @returns {Homepage | SignupPage | LoginPage}
 */

function pages(name) {
  const items = {
    home: new Homepage(),
    signup: new SignupPage(),
    login: new LoginPage(),
  };
  return items[name.toLowerCase()];
}

export { Homepage, SignupPage, LoginPage, pages };
