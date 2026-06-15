import {
  Navbar,
  SearchComponent,
  ProductList,
  CategoriesComponent,
} from "../components";
import { BasePage } from "./base.page";

export class Homepage extends BasePage {
  constructor() {
    super("/");
    this.navbar = new Navbar();
    this.productList = new ProductList();
    this.search = new SearchComponent();
    this.categories = new CategoriesComponent();
  }
}
