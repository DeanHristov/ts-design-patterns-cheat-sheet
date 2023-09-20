import { IButton, IFactoryCreator, IWindow } from "./FactoryCreator";
import WinButton from "./WinButton";
import WinWindow from "./WinWindow";

// Concrete Factory 1
export default class WindowsPC implements IFactoryCreator {
  createButton(): IButton {
    return new WinButton('Click me');
  }

  createWindow(): IWindow {
    return new WinWindow('File Explorer');
  }
}
