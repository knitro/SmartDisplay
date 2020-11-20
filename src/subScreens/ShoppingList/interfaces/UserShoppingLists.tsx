/**
 * This interface is used to determine what shopping lists the user is part of, and any invites.
 */
export interface UserShoppingLists {
  currentLists : CurrentShoppingList[],
  invitedLists : InvitedToShoppingList[],
}

/**
 * Information detailing about a specific shopping lists that the user is part of.
 */
export interface CurrentShoppingList {
  name          : string,
  subtitle      : string,
  uid           : string,
  otherUsers    : string[],
}

/**
 * Information detailing about a shopping list that the user is invited to
 */
export interface InvitedToShoppingList {
  name          : string,
  subtitle      : string,
  uid           : string,
  otherUsers    : string[],
}