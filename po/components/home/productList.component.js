import { BaseComponent } from "../common/base.component";

export class ProductList extends BaseComponent {
  get productCards() {
    return $$("a.card");
  }

  get productTitles() {
    return $$(".card-title");
  }

  get listByCategories() {
    return $('div[data-test="filter_completed"]');
  }
}
