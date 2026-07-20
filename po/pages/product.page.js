import { ProductCard } from "../components";
import { BasePage } from "./base.page";

export class ProductPage extends BasePage {
  constructor() {
    super("/product");
    this.product = new ProductCard();
  }

  get addToCartSuccessMsg() {
    return $("div*=added to shopping cart");
  }

  async open(productId) {
    await browser.url(`${this.url}/${productId}`);
  }

  async addProductToCart() {
    await this.product.addToCartBtn.click();
    await this.addToCartSuccessMsg.waitForExist({
      timeout: 5000,
      timeoutMsg: "Add to cart success message is not displayed",
    });
  }
}
