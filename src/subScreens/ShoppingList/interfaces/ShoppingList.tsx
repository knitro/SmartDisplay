import { ListItem } from "./ListItem";

export interface ShoppingList {
  name          : string,
  subtitle      : string,
  uid           : string,
  otherUsers    : string[],
  items         : ListItem[],
}