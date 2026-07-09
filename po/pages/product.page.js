import { ProductCard } from "../components";
import { BasePage } from "./base.page";

export class ProductPage extends BasePage {
  constructor() {
    super("/product");
    this.product = new ProductCard();
  }

  async open(productId) {
    await browser.url(`${this.url}/${productId}`);
  }
}
