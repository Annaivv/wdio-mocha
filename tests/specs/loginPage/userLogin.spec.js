import { expect } from "chai";
import { pages } from "../../../po/pages";
import { LOGIN_PAGE_URL, USER_ACCOUNT_URL } from "../../../data/constants";
import { userData } from "../../../data/userData";
import { waitForUrl } from "../../../helpers/waitForUrl";
import { generateUniqueEmail } from "../../../helpers/generateUniqueEmail";
import { registerUser } from "../../../helpers/registerUser";

describe("Registered user login", () => {
  let testUser;
  let loginForm;

  before(async () => {
    testUser = {
      ...userData,
      email: generateUniqueEmail(),
    };
    loginForm = pages("login").loginForm;

    await registerUser(testUser);

    await pages("login").open();
  });

  it("Registered user is redirected to his account page when logged in with his email and password", async () => {
    const actualUrl = await browser.getUrl();
    expect(actualUrl).to.equal(LOGIN_PAGE_URL);

    await loginForm.input("email").setValue(testUser.email);
    await loginForm.input("password").setValue(testUser.password);

    await loginForm.loginBtn.click();

    const newUrl = await waitForUrl(USER_ACCOUNT_URL);
    expect(newUrl).to.be.true;
  });
});
