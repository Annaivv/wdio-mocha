import { expect } from "chai";
import { pages } from "../../po/pages";
import { waitForText } from "../../helpers";
import { expectedTitles } from "../../data/expectedTitles";

describe("Language selection", () => {
  let homepage;
  let langSelect;

  beforeEach(async () => {
    homepage = await pages("home").setupHomepage();
    await homepage.navbar.selectGermanLanguage();
  });

  it("Should show menu item names in German when DE is selected in the language selection dropdown", async () => {
    expect(await homepage.navbar.getLanguageSelectText()).to.include("DE");

    const navSignIn = homepage.navbar.navSignIn;
    const navSignInGerman = await waitForText(navSignIn, "Einloggen");
    expect(navSignInGerman).to.be.true;

    const navCategories = homepage.navbar.navCategories;
    const navCategoriesGerman = await waitForText(navCategories, "Kategorien");
    expect(navCategoriesGerman).to.be.true;
  });

  it("Should show Tool categories on the sidebar in English when DE is selected in the language selection dropdown", async () => {
    expect(await homepage.navbar.getLanguageSelectText()).to.include("DE");

    const titleTexts = await homepage.productList.getProductTitles();

    expectedTitles.forEach((expected) =>
      expect(titleTexts).to.include(expected),
    );
  });
});
