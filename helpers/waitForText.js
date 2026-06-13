// import { should } from "chai";
// should();

export async function waitForText(element, expectedText, timeout = 5000) {
  await element.waitUntil(
    async function () {
      return (await this.getText()) === expectedText;
    },
    {
      timeout,
      timeoutMsg: `expected text to be ${expectedText} after ${timeout / 1000}s`,
    },
  );

  const actualText = await element.getText();
  return actualText === expectedText;
}
