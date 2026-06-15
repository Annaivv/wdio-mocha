import { expect, assert } from "chai";
import { userData } from "../../../data/userData";
import { PRODUCT_BASE_URL, USER_ACCOUNT_URL } from "../../../data/constants";
import { generateUniqueEmail } from "../../../helpers/generateUniqueEmail";
import { loginUser } from "../../../helpers/loginUser";
import { waitForUrl } from "../../../helpers/waitForUrl";
import { pages } from "../../../po/pages";

describe("Add product to cart", () => {
  let testUser;
  let productList;
  let homepage;

  before(async () => {
    homepage = pages("home");
    productList = homepage.productList;
    testUser = {
      ...userData,
      email: generateUniqueEmail(),
    };
    await loginUser(testUser);
  });
  it("Product should be in the cart when added by logged in user", async () => {
    const userAccountUrl = await waitForUrl(USER_ACCOUNT_URL);
    expect(userAccountUrl).to.be.true;

    await homepage.navbar.homeNavLink.click();
    await homepage.open();

    await browser.waitUntil(
      async () => (await $$("a.card[data-test]")).length > 0,
      { timeout: 5000, timeoutMsg: "Product cards not found" },
    );
    const cards = await $$("a.card[data-test]");

    const dataTest = await cards[1].getAttribute("data-test");
    const productID = dataTest.split("-")[1];
    const productUrl = `${PRODUCT_BASE_URL}/${productID}`;
    const addProductSuccessMsg = $(
      "//div[text()='Product added to shopping cart.']",
    );

    await cards[1].click();
    const isUrlCorrect = await waitForUrl(productUrl);
    assert.isTrue(isUrlCorrect);

    await $('button[data-test="add-to-cart"]').click();
    assert.exists(addProductSuccessMsg);

    const cart = homepage.navbar.shoppingCart;
    const cartQuantity = homepage.navbar.cartQuantity;
    const quantityText = await cartQuantity.getText();
    assert.exists(cart);
    assert.exists(cartQuantity);
    assert.equal(quantityText, 1);
  });
});
