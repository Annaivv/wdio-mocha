import { BaseComponent } from "../common/base.component";

export class ProductList extends BaseComponent {
  get productCards() {
    return $$("a.card");
  }

  get productTitles() {
    return $$(".card-title");
  }
}
