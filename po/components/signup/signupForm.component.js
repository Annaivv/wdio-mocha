import { BaseForm } from "../common/base-form.component";

export class SignupForm extends BaseForm {
  constructor() {
    super(".auth-form");
    this.selectors = {
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
  }

  get signupBtn() {
    return this.rootEl.$('button[data-test="register-submit"]');
  }

  get countriesSelect() {
    return this.rootEl.$('select[data-test="country"]');
  }

  get existingEmailErrorMsg() {
    return this.rootEl.$(
      '//div[text()="A customer with this email address already exists."]',
    );
  }
}
