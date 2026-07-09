import { expect } from "chai";
import { pages } from "../../../po/pages";
import { USER_ACCOUNT_URL } from "../../../data/constants";
import { waitForUrl, createTestUser } from "../../../helpers";

describe("Registered user login", () => {
  let testUser;

  before(async () => {
    testUser = createTestUser();
    await pages("signup").register(testUser);
    await pages("login").open();
  });

  it("Registered user is redirected to his account page when logged in with his email and password", async () => {
    await pages("login").login(testUser);

    const newUrl = await waitForUrl(USER_ACCOUNT_URL, 10000);
    expect(newUrl).to.be.true;
    const userMenu = await pages("home").navbar.userMenu;
    await userMenu.waitForDisplayed();
    expect(await userMenu.isDisplayed()).to.be.true;

    const userName = await userMenu.getText();
    expect(userName).to.include(testUser.firstName);
    expect(userName).to.include(testUser.lastName);
  });
});
