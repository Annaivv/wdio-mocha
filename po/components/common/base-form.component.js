import { BaseComponent } from "./base.component";

export class BaseForm extends BaseComponent {
  input(name) {
    if (!this.selectors || !this.selectors[name])
      throw new Error(`Selector not found for input: ${name}`);

    return this.rootEl.$(this.selectors[name]);
  }
}
