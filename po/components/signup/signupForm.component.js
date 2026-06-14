import { BaseComponent } from "../common/base.component";

export class SignupForm extends BaseComponent {
  constructor() {
    super(".auth-form");
  }

  /**
   *
   * @param {"firstName" | "lastName" | "birthDate"| "postalCode" | "houseNumber" | "street" | "city" | "state" | "phone" | "email" | "password"} name
   * @returns {Promise<WebdriverIO.Element>}
   */
  input(name) {
    const selectors = {
      firstName: 'input[data-test="first-name"]',
      lastName: 'input[data-test="last-name"]',
      birthDate: 'input[data-test="dob"]',
      postalCode: 'input[data-test="postal_code"]',
      houseNumber: 'input[data-test="house_number"]',
      street: 'input[data-test="street"]',
      city: 'input[data-test="city"]',
      state: 'input[data-test="state"]',
      phone: 'input[data-test="phone"]',
      email: 'input[data-test="email"]',
      password: 'input[data-test="password"]',
    };

    return this.rootEl.$(selectors[name]);
  }

  get signupBtn() {
    return this.rootEl.$('button[data-test="register-submit"]');
  }

  get countriesSelect() {
    return this.rootEl.$('select[data-test="country"]');
  }
}
