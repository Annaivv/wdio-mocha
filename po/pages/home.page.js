import { Navbar } from "../components";
import { ProductList } from "../components";
import { BasePage } from "./base.page";

export class Homepage extends BasePage {
  constructor() {
    super("/");
    this.navbar = new Navbar();
    this.productList = new ProductList();
  }
}
