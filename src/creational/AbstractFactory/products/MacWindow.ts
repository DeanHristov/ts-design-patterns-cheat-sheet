import { IWindow } from "../FactoryCreator";

// Concrete product 3
export default class MacWindow implements IWindow {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  close(): string {
    return `A window ${this.title} is closed`;
  }

  open(): string {
    return `A window ${this.title} is opened`;
  }
}
