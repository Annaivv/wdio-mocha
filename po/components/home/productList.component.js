import { BaseComponent } from "../common/base.component";

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
}
