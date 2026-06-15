import { Homepage } from "./home.page";
import { SignupPage } from "./signup.page";
import { LoginPage } from "./login.page";
import { ProductPage } from "./product.page";

/**
 * @param {"home" | "signup" | "login" | "product"} name
 * @returns {Homepage | SignupPage | LoginPage | ProductPage}
 */

function pages(name) {
  const items = {
    home: new Homepage(),
    signup: new SignupPage(),
    login: new LoginPage(),
    product: new ProductPage(),
  };
  return items[name.toLowerCase()];
}

export { Homepage, SignupPage, LoginPage, ProductPage, pages };
