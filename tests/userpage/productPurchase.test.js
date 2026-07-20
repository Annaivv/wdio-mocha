import { expect } from "chai";
import { PRODUCT_BASE_URL, USER_ACCOUNT_URL } from "../../data/constants";
import { createTestUser, waitForUrl } from "../../helpers";
import { pages } from "../../po/pages";

describe("Add product to cart", () => {
  let testUser;
  let productList;
  let homepage;

  before(async () => {
    homepage = await pages("home").setupHomepage();
    productList = homepage.productList;
    testUser = createTestUser();
    await pages("signup").register(testUser);
    await pages("login").login(testUser);
  });

  it("Product should be in the cart when added by logged in user", async () => {
    expect(await waitForUrl(USER_ACCOUNT_URL)).to.be.true;

    await homepage.navbar.homeNavLink.click();

    await homepage.productList.openProductByIndex(1);

    const productPage = pages("product");
    await productPage.addProductToCart();

    expect(productPage.addToCartSuccessMsg).to.exist;
    expect(await homepage.navbar.getCartQuantity()).to.equal("1");
  });
});
