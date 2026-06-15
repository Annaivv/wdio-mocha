import { pages } from "../po/pages";

export async function setupHomepage() {
  const homepage = pages("home");
  await homepage.open();
  return homepage;
}
