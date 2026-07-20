import { BaseComponent } from "../common/base.component";

export class ProductCard extends BaseComponent {
  get addToCartBtn() {
    return $('button[data-test="add-to-cart"]');
  }
}
