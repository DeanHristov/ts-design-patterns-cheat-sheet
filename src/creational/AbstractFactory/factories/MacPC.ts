import { IButton, IFactoryCreator, IWindow } from "../FactoryCreator";
import MacButton from "../products/MacButton";
import MacWindow from "../products/MacWindow";

// Concrete Factory 2
export default class MacPC implements IFactoryCreator {
  createButton(): IButton {
    return new MacButton('Click me');
  }

  createWindow(): IWindow {
    return new MacWindow('Finder');
  }
}
