import { BaseComponent } from "../common/base.component";

export class LoginForm extends BaseComponent {
  constructor() {
    super('form[data-test="login-form"]');
  }

  /**
   * @param {"email" | "password"} name
   * @returns {Promise<WebdriverIO.Element>}
   */
  input(name) {
    const selectors = {
      email: 'input[data-test="email"]',
      password: 'input[data-test="password"]',
    };
    return this.rootEl.$(selectors[name]);
  }

  get loginBtn() {
    return this.rootEl.$('input[data-test="login-submit"]');
  }
}
