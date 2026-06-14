import { BaseComponent } from "../common/base.component";

export class ProductList extends BaseComponent {
  get productTitles() {
    return $$(".card-title");
  }
}
