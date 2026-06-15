import { expect } from "chai";
import { pages } from "../../../po/pages";
import { userData } from "../../../data/userData";
import {
  waitForUrl,
  generateUniqueEmail,
  registerUser,
} from "../../../helpers";
import { LOGIN_PAGE_URL, SIGNUP_PAGE_URL } from "../../../data/constants";

describe("New user signup", () => {
  let testUser;

  before(async () => {
    testUser = {
      ...userData,
      email: generateUniqueEmail(),
    };

    await registerUser(testUser);
  });

  it("Login form is opened after signup with valid user data in all mandatory fields", async () => {
    const newUrl = await waitForUrl(LOGIN_PAGE_URL);
    expect(newUrl).to.be.true;
  });

  it("User cannot register with already registered email", async () => {
    await registerUser(testUser);

    const isDisplayed =
      await pages("signup").signupForm.existingEmailErrorMsg.waitForDisplayed();
    expect(isDisplayed).to.be.true;

    expect(await browser.getUrl()).to.equal(SIGNUP_PAGE_URL);
  });
});
