export default interface Parser {
  IsTextSearch(): boolean;
  IsUCS(): boolean;
  IsOnlyQuery(): boolean;
  QueryHashToArray(): any; // Replace 'any' with a more specific type if known
}