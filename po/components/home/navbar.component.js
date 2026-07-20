import { BaseComponent } from "../common/base.component";

export class Navbar extends BaseComponent {
  constructor() {
    super("#navbarSupportedContent");
  }

  get homeNavLink() {
    return this.rootEl.$('[data-test="nav-home"]');
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

  get shoppingCart() {
    return this.rootEl.$('[data-test="nav-cart"]');
  }

  get cartQuantity() {
    return this.rootEl.$('span[data-test="cart-quantity"]');
  }

  get userMenu() {
    return this.rootEl.$('[data-test="nav-menu"]');
  }

  async getCartQuantity() {
    return await this.cartQuantity.getText();
  }
}
