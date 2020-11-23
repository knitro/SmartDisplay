import Firebase from "../../../firebase";
import { ShoppingState } from "./ShoppingState";

/**
 * Props Interface for simplifying references within ShoppingList
 */
export interface ShoppingListInfo {
  firebase      : Firebase,
  stateAdjuster : (state : ShoppingState) => void
}