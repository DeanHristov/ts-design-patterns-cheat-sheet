export interface IButton {
  name: string;

  click(): string;
}

export interface IWindow {
  title: string;

  open(): string;

  close(): string;
}

export interface IFactoryCreator {
  createButton(): IButton;

  createWindow(): IWindow;
}
