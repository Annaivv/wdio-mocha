import { SignupForm } from "../components/signup/signupForm.component";
import { BasePage } from "./base.page";

export class SignupPage extends BasePage {
  constructor() {
    super("/auth/register");
    this.signupForm = new SignupForm();
  }

  async register(user) {
    const inputNames = Object.keys(user);

    await this.open();

    for (const name of inputNames) {
      await this.signupForm.input(name).setValue(user[name]);
    }

    await this.signupForm.countriesSelect.waitForDisplayed();
    await this.signupForm.countriesSelect.selectByAttribute("value", "US");
    await this.signupForm.signupBtn.click();
  }
}
