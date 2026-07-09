import { BaseComponent } from "../common/base.component";

export class CategoriesComponent extends BaseComponent {
  constructor() {
    super("#filters fieldset:first-child");
  }

  get subCategories() {
    return this.rootEl.$$("label");
  }

  get firstSubcategory() {
    return this.rootEl.$("label");
  }
}
