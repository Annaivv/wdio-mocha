import { BaseComponent } from "../common/base.component";
import { PRODUCT_BASE_URL } from "../../../data/constants";
import { waitForUrl } from "../../../helpers";

export class ProductList extends BaseComponent {
  constructor() {
    super("div.container[data-test]");
  }
  get productCards() {
    return this.rootEl.$$("a.card");
  }

  get productTitles() {
    return this.rootEl.$$(".card-title");
  }

  get listAfterSearch() {
    return $('div[data-test="search_completed"]');
  }

  get listByCategories() {
    return $('div[data-test="filter_completed"]');
  }

  async getProductTitles() {
    const titles = await this.productTitles.slice();
    return Promise.all(titles.map((title) => title.getText()));
  }

  async getProductByIndex(index) {
    await browser.waitUntil(async () => (await this.productCards).length > 0, {
      timeout: 5000,
      timeoutMsg: "Product cards not found",
    });
    const cards = await this.productCards;
    return cards[index];
  }

  async openProductByIndex(index) {
    const card = await this.getProductByIndex(index);

    const dataTest = await card.getAttribute("data-test");
    const productID = dataTest.split("-")[1];
    const productUrl = `${PRODUCT_BASE_URL}/${productID}`;

    await card.click();

    const isUrlCorrect = await waitForUrl(productUrl);
    if (!isUrlCorrect) {
      throw new Error(
        `Failed to navigate to product page. Expected URL: ${productUrl}`,
      );
    }
    return productID;
  }
}
