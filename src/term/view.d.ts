export default interface TermView {
  BindElement(element: HTMLElement): void;
  SetCssState(range: any): void; // Replace 'any' with a more specific type if known
}