import { expect } from "chai";
import { pages } from "../../../po/pages";
import { userData } from "../../../data/userData";

describe("New user signup", () => {
  beforeEach(async () => {
    await pages("signup").open();
  });

  it.only("Login form is opened after signup with valid user data in all mandatory fields", async () => {
    const signupUrl = await browser.getUrl();
    expect(signupUrl).to.equal(
      "https://practicesoftwaretesting.com/auth/register",
    );

    const signupPage = pages("signup");
    const signupForm = signupPage.signupForm;

    const uniqueEmail = `test${Date.now()}@newmail.com`;

    const inputNames = Object.keys(userData).filter((name) => name !== "email");
    for (const name of inputNames) {
      await signupForm.input(name).setValue(userData[name]);
    }

    await signupForm.input("email").setValue(uniqueEmail);

    expect(signupForm.countriesSelect).to.exist;
    await signupForm.countriesSelect.selectByAttribute("value", "US");

    await signupForm.signupBtn.click();

    const expectedLoginUrl = "https://practicesoftwaretesting.com/auth/login";
    await browser.waitUntil(
      async () => (await browser.getUrl()) === expectedLoginUrl,
      {
        timeout: 5000,
        timeoutMsg: `Expected to be redirected to ${expectedLoginUrl}`,
      },
    );
    const loginUrl = await browser.getUrl();
    expect(loginUrl).to.equal(expectedLoginUrl);
  });
});
