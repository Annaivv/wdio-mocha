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
    await langSelect.click();
    await homepage.navbar.languagesList.waitForDisplayed();
    await homepage.navbar.languageGermanItem.click();
  });

  it("Should show menu item names in German when DE is selected in the language selection dropdown", async () => {
    (await langSelect.getText()).should.contain("DE");

    const navSignIn = homepage.navbar.navSignIn;
    const navSignInGerman = await waitForText(navSignIn, "Einloggen");
    navSignInGerman.should.be.true;

    const navCategories = homepage.navbar.navCategories;
    const navCategoriesGerman = await waitForText(navCategories, "Kategorien");
    navCategoriesGerman.should.be.true;
  });
});
