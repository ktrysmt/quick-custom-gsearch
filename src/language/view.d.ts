export default interface LanguageView {
  BindElement(element: HTMLElement): void;
  SetCssState(language: any): void; // Replace 'any' with a more specific type if known
}