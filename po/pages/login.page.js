import { LoginForm } from "../components";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  constructor() {
    super("/auth/login");
    this.loginForm = new LoginForm();
  }

  async login({ email, password }) {
    await this.open();
    await this.loginForm.input("email").setValue(email);
    await this.loginForm.input("password").setValue(password);
    await this.loginForm.loginBtn.click();
  }
}
