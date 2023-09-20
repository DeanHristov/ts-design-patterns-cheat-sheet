import { IButton } from "../FactoryCreator";

// Concrete product 2
export default class WinButton implements IButton {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  click(): string {
    return `Trigger click on a "${this.name}" button`;
  }
}
