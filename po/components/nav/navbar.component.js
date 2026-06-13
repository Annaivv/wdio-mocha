import { BaseComponent } from "../common/base.component";

export class Navbar extends BaseComponent {
  constructor() {
    super("#navbarSupportedContent");
  }

  get languageSelect() {
    return this.rootEl.$('[data-test="language-select"]');
  }

  get languagesList() {
    return this.rootEl.$("#dropdown-animated");
  }

  get languageGermanItem() {
    return this.rootEl.$('[data-test="lang-de"]');
  }

  get navSignIn() {
    return this.rootEl.$('[data-test="nav-sign-in"]');
  }

  get navCategories() {
    return this.rootEl.$('[data-test="nav-categories"]');
  }
}
