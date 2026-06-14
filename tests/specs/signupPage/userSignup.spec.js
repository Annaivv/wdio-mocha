import { expect } from "chai";
import { pages } from "../../../po/pages";
import { userData } from "../../../data/userData";
import { waitForUrl } from "../../../helpers/waitForUrl";
import { generateUniqueEmail } from "../../../helpers/generateUniqueEmail";

describe("New user signup", () => {
  const uniqueEmail = generateUniqueEmail();
  const inputNames = Object.keys(userData).filter((name) => name !== "email");
  const loginPageUrl = "https://practicesoftwaretesting.com/auth/login";
  const signupPageUrl = "https://practicesoftwaretesting.com/auth/register";

  let signupForm;

  beforeEach(async () => {
    await pages("signup").open();
    signupForm = pages("signup").signupForm;
    for (const name of inputNames) {
      await signupForm.input(name).setValue(userData[name]);
    }

    await signupForm.input("email").setValue(uniqueEmail);
  });

  it("Login form is opened after signup with valid user data in all mandatory fields", async () => {
    const actualUrl = await browser.getUrl();
    expect(actualUrl).to.equal(signupPageUrl);

    expect(signupForm.countriesSelect).to.exist;
    await signupForm.countriesSelect.selectByAttribute("value", "US");

    await signupForm.signupBtn.click();

    const newUrl = await waitForUrl(loginPageUrl);
    expect(newUrl).to.be.true;
  });

  it("User cannot register with already registered email", async () => {
    const actualUrl = await browser.getUrl();
    expect(actualUrl).to.equal(signupPageUrl);

    expect(signupForm.countriesSelect).to.exist;
    await signupForm.countriesSelect.selectByAttribute("value", "US");

    await signupForm.input("email").setValue(uniqueEmail);

    await signupForm.signupBtn.click();

    const isDisplayed =
      await signupForm.existingEmailErrorMsg.waitForDisplayed();
    expect(isDisplayed).to.be.true;

    expect(await browser.getUrl()).to.equal(signupPageUrl);
  });
});
