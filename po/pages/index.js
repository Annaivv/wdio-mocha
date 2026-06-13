import { Homepage } from "./home.page";

/**
 * @param {"home"} name
 * @returns {Homepage}
 */

function pages(name) {
  const items = {
    home: new Homepage(),
  };
  return items[name.toLowerCase()];
}

export { Homepage, pages };
