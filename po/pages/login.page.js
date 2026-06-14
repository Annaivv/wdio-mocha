import { LoginForm } from "../components";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  constructor() {
    super("/auth/login");
    this.loginForm = new LoginForm();
  }
}
