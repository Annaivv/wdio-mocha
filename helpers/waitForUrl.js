export async function waitForUrl(expectedUrl, timeout = 5000) {
  await browser.waitUntil(
    async () => (await browser.getUrl()) === expectedUrl,
    {
      timeout,
      timeoutMsg: `Expected to be redirected to ${expectedUrl} after ${timeout / 1000}s`,
    },
  );
  const actualUrl = await browser.getUrl();
  return actualUrl === expectedUrl;
}
