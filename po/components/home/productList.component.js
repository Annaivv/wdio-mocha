import { BaseComponent } from "../common/base.component";

export class ProductList extends BaseComponent {
  get productCards() {
    return $$("a.card");
  }

  get productTitles() {
    return $$(".card-title");
  }

  get listAfterSearch() {
    return $('div[data-test="search_completed"]');
  }

  get listByCategories() {
    return $('div[data-test="filter_completed"]');
  }
}
