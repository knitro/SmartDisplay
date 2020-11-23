import { ShoppingListPage } from "../ShoppingListScreen";
import { CurrentShoppingList } from "./UserShoppingLists";

/**
 * The interface used for State management in regards of the Shopping Screens.
 * This would be used in conjunction of a React Class.
 */
export interface ShoppingState {
  currentScreen : ShoppingListPage,
  selectedList  : CurrentShoppingList,
}
