import { should } from "chai";
import { pages } from "../../../po/pages";
import { waitForText } from "../../../helpers";
import { expectedTitles } from "../../../data/expectedTitles";

should();

describe("Language selection", () => {
  let homepage;
  let langSelect;

  beforeEach(async () => {
    homepage = await pages("home").setupHomepage();
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

  it("Tool categories on the sidebar remain in English when DE is selected in the language selection dropdown", async () => {
    (await langSelect.getText()).should.contain("DE");

    const testCardTitles = await homepage.productList.productTitles.slice(0, 3);
    const titleTexts = await Promise.all(
      testCardTitles.map((title) => title.getText()),
    );

    expectedTitles.forEach((expected) => titleTexts.should.include(expected));
  });
});
