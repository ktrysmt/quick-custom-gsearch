export default interface MainView {
  CreateElement(): HTMLElement;
  BindElement(element: HTMLElement): void;
}