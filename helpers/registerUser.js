import { pages } from "../po/pages";

export async function registerUser(user) {
  const inputNames = Object.keys(user);
  const signupForm = pages("signup").signupForm;

  await pages("signup").open();

  for (const name of inputNames) {
    await signupForm.input(name).setValue(user[name]);
  }

  await signupForm.countriesSelect.waitForDisplayed();
  await signupForm.countriesSelect.selectByAttribute("value", "US");

  await signupForm.signupBtn.click();
}
