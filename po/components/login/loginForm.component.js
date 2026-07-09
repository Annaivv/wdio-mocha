import { BaseForm } from "../common/base-form.component";

export class LoginForm extends BaseForm {
  constructor() {
    super('form[data-test="login-form"]');
    this.selectors = {
      email: 'input[data-test="email"]',
      password: 'input[data-test="password"]',
    };
  }

  get loginBtn() {
    return this.rootEl.$('input[data-test="login-submit"]');
  }
}
