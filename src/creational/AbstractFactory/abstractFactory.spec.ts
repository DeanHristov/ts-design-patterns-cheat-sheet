import { describe, it } from '@jest/globals';
import ApplicationGUI from './ApplicationGUI';
import WindowsPC from './WindowsPC';
import MacPC from './MacPC';

describe('Creational -> Abstract Factory Design pattern', () => {
  it('Should be able to open a window on Mac PC', () => {
    const macGUI: ApplicationGUI = new ApplicationGUI(new MacPC());

    expect(macGUI.openWindow()).toEqual(`A window Finder is opened`);
  });
  it('Should be able to trigger a click event on Mac PC', () => {
    const macGUI: ApplicationGUI = new ApplicationGUI(new MacPC());

    expect(macGUI.clickOnButton()).toEqual(
      'Trigger click on a "Click me" button',
    );
  });
  it('Should be able to open a window on Window PC', () => {
    const windowsGUI: ApplicationGUI = new ApplicationGUI(new WindowsPC());

    expect(windowsGUI.openWindow()).toEqual('A window File Explorer is opened');
  });

  it('Should be able to trigger a click event on Window PC', () => {
    const windowsGUI: ApplicationGUI = new ApplicationGUI(new WindowsPC());

    expect(windowsGUI.clickOnButton()).toEqual(
      'Trigger click on a "Click me" button',
    );
  });
});
