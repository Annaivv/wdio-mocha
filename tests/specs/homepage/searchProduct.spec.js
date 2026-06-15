import { expect } from "chai";
import { expectedTitles } from "../../../data/expectedTitles";
import { pages } from "../../../po/pages";

describe("Product search", () => {
  let homepage;

  before(async () => {
    homepage = await pages("home");
    await homepage.open();
  });

  expectedTitles.forEach((title) => {
    it(`Cards including ${title} in the title displayed in the product list`, async () => {
      await homepage.search.searchInput.setValue(title.trim().toLowerCase());
      const searchValue = await homepage.search.searchInput.getValue();
      await homepage.search.searchBtn.click();

      await homepage.productList.listAfterSearch.waitForDisplayed();
      expect(homepage.productList.listAfterSearch).to.not.be.undefined;

      const testCardTitles = await homepage.productList.productTitles.slice();
      const titleTexts = await Promise.all(
        await testCardTitles.map((title) => title.getText()),
      );
      console.log(titleTexts);
      expect(titleTexts.length).to.be.above(0);
      titleTexts.forEach((text) =>
        expect(text.trim().toLowerCase()).to.include(searchValue),
      );
    });
  });
});
