import { expect } from "chai";
import { pages } from "../../../po/pages";
import { setupHomepage } from "../../../helpers/setupHomepage";

describe("Filter products by category", () => {
  let homepage;

  before(async () => {
    homepage = await setupHomepage();
  });

  it("List of products that belong to the chosen subcategory should be displayed", async () => {
    const subcategory = await homepage.categories.rootEl.$("label");
    expect(subcategory).to.not.be.undefined;

    const subcatName = await subcategory.getText();
    const catValueToCheck = subcatName.trim().toLowerCase();

    await subcategory.click();

    await homepage.productList.listByCategories.waitForDisplayed();
    expect(homepage.productList.listByCategories).to.not.be.undefined;

    const testCardTitles = await homepage.productList.productTitles.slice();
    const titleTexts = await Promise.all(
      testCardTitles.map((title) => title.getText()),
    );
    expect(titleTexts.length).to.be.above(0);

    titleTexts.forEach((text) =>
      expect(text.trim().toLowerCase()).to.have.string(catValueToCheck),
    );
  });
});
