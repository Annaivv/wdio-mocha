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

// import { InventoryPage } from "./inventory.page";
// import { LoginPage } from "./login.page";

// /**
//  * @param {"login" | "inventory"} name
//  * @returns {LoginPage | InventoryPage}
//  */
// function pages(name) {
//   const items = {
//     login: new LoginPage(),
//     inventory: new InventoryPage(),
//   };
//   return items[name.toLowerCase()];
// }

// export { InventoryPage, LoginPage, pages };
