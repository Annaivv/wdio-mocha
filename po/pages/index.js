import { Homepage } from "./home.page";
import { SignupPage } from "./signup.page";

/**
 * @param {"home" | "signup"} name
 * @returns {Homepage | SignupPage}
 */

function pages(name) {
  const items = {
    home: new Homepage(),
    signup: new SignupPage(),
  };
  return items[name.toLowerCase()];
}

export { Homepage, SignupPage, pages };
