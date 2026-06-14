import { SignupForm } from "../components/signup/signupForm.component";
import { BasePage } from "./base.page";

export class SignupPage extends BasePage {
  constructor() {
    super("/auth/register");
    this.signupForm = new SignupForm();
  }
}
