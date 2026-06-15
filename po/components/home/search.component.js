import { BaseComponent } from "../common/base.component";

export class SearchComponent extends BaseComponent {
  constructor() {
    super("#filters form:nth-of-type(2)");
  }

  get searchInput() {
    return this.rootEl.$('[data-test="search-query"]');
  }

  get searchBtn() {
    return this.rootEl.$('[data-test="search-submit"]');
  }
}
