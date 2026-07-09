import { expect } from "chai";
import { pages } from "../../../po/pages";

describe("Filter products by category", () => {
  let homepage;

  before(async () => {
    homepage = await pages("home").setupHomepage();
  });

  it("List of products that belong to the chosen subcategory should be displayed", async () => {
    const subcategory = await homepage.categories.rootEl.$("label");
    expect(subcategory).to.not.be.undefined;

    const subcatName = await subcategory.getText();
    const subcatValue = subcatName.trim().toLowerCase();

    await subcategory.click();

    await homepage.productList.listByCategories.waitForDisplayed();
    expect(homepage.productList.listByCategories).to.not.be.undefined;

    const titleTexts = await homepage.productList.getProductTitles();
    expect(titleTexts.length).to.be.above(0);

    titleTexts.forEach((text) =>
      expect(text.trim().toLowerCase()).to.have.string(subcatValue),
    );
  });
});
