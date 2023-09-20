import { IWindow } from "./FactoryCreator";

// Concrete product 1
export default class WinWindow implements IWindow {
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
