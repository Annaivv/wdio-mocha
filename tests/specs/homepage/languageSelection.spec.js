import { expect, assert, should } from "chai";
import { pages } from "../../../po/pages";
import { waitForText } from "../../../helpers/waitForText";

should();

describe("Language selection", () => {
  let homepage;
  let langSelect;

  beforeEach(async () => {
    homepage = pages("home");
    await homepage.open();
    langSelect = homepage.navbar.languageSelect;
  });

  it("Should show menu item names in German when DE is selected in the language selection dropdown", async () => {
    const languageSelected = await langSelect.getText();

    await languageSelected.should.contain("EN");

    await langSelect.click();
    const languageListIsDisplayed =
      await homepage.navbar.languagesList.isDisplayed();
    languageListIsDisplayed.should.be.true;

    await homepage.navbar.languageGermanItem.click();
    (await langSelect.getText()).should.contain("DE");

    const navSignIn = homepage.navbar.navSignIn;
    const navSignInGerman = await waitForText(navSignIn, "Einloggen");
    navSignInGerman.should.be.true;

    const navCategories = homepage.navbar.navCategories;
    const navCategoriesGerman = await waitForText(navCategories, "Kategorien");
    navCategoriesGerman.should.be.true;
  });
});
