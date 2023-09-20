import { IButton, IFactoryCreator, IWindow } from './FactoryCreator';

export default class ApplicationGUI {
  factory: IFactoryCreator;

  constructor(factory: IFactoryCreator) {
    this.factory = factory;
  }

  openWindow(): string {
    const win: IWindow = this.factory.createWindow();

    return win.open();
  }

  clickOnButton(): string {
    const btn: IButton = this.factory.createButton();

    return btn.click();
  }
}
