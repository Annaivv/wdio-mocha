import { BaseComponent } from "../common/base.component";

export class ProductCard extends BaseComponent {
  constructor() {
    super("app-detail");
  }
  get addToCartBtn() {
    return this.rootEl.$('button[data-test="add-to-cart"]');
  }
}
