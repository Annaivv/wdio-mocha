import { expect, assert } from "chai";
import { userData } from "../../../data/userData";
import { PRODUCT_BASE_URL, USER_ACCOUNT_URL } from "../../../data/constants";
import { generateUniqueEmail, loginUser, waitForUrl } from "../../../helpers";
import { pages } from "../../../po/pages";
import { setupHomepage } from "../../../helpers/setupHomepage";

describe("Add product to cart", () => {
  let testUser;
  let productList;
  let homepage;

  before(async () => {
    homepage = await setupHomepage();
    productList = homepage.productList;
    testUser = {
      ...userData,
      email: generateUniqueEmail(),
    };
    await pages("signup").register(testUser);
    await pages("login").open();
    await loginUser(testUser);
  });
  it("Product should be in the cart when added by logged in user", async () => {
    const userAccountUrl = await waitForUrl(USER_ACCOUNT_URL);
    expect(userAccountUrl).to.be.true;

    await homepage.navbar.homeNavLink.click();
    await homepage.open();

    await browser.waitUntil(
      async () => (await homepage.productList.productCards).length > 0,
      { timeout: 5000, timeoutMsg: "Product cards not found" },
    );
    const cards = await homepage.productList.productCards;

    const dataTest = await cards[1].getAttribute("data-test");
    const productID = dataTest.split("-")[1];
    const productUrl = `${PRODUCT_BASE_URL}/${productID}`;
    const addProductSuccessMsg = $(
      "//div[text()='Product added to shopping cart.']",
    );

    await cards[1].click();
    const isUrlCorrect = await waitForUrl(productUrl);
    assert.isTrue(isUrlCorrect);

    const productPage = pages("product");
    await productPage.open(productID);

    await productPage.product.addToCartBtn.click();
    assert.exists(addProductSuccessMsg);

    const cart = homepage.navbar.shoppingCart;
    const cartQuantity = homepage.navbar.cartQuantity;
    const quantityText = await cartQuantity.getText();
    assert.exists(cart);
    assert.exists(cartQuantity);
    assert.equal(quantityText, 1);
  });
});
