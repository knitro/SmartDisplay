////////////////////////
/*Imports*/
////////////////////////

import { timeOutline, calendarOutline, newspaperOutline, listOutline, createOutline, cartOutline, logInOutline, settingsOutline, personCircle } from 'ionicons/icons';

////////////////////////
/*Interfaces*/
////////////////////////

/**
 * The Interface used for containing the important data when constructing a SideBar Item.
 */
export interface SideBarItem {
  label : string,
  path : string,
  iconName : string
}

////////////////////////
/*SideBar Items*/
////////////////////////
  
/**
 * Main Sidebar Items
 */
export const sideBarItems : SideBarItem[]= [
  {label: "Time"            , path: "/time"             , iconName: timeOutline},
  {label: "Calendar"        , path: "/calendar"         , iconName: calendarOutline},
  {label: "Current Events"  , path: "/currentEvents"    , iconName: newspaperOutline},
  {label: "Notes"           , path: "/notes"            , iconName: createOutline},
  {label: "ToDo List"       , path: "/todoList"         , iconName: listOutline},
  {label: "Settings"        , path: "/settings"         , iconName: settingsOutline},
  {label: "Shopping List"   , path: "/shoppingList"     , iconName: cartOutline},
];

/**
 * Logged In Sidebar Items
 */
export const loggedInItems : SideBarItem[]= [
  {label: "My Profile"      , path: "/myProfile"        , iconName: personCircle},
];

/**
 * Logged Out Sidebar Items
 */
export const loggedOutItems : SideBarItem[]= [
  {label: "Log In"          , path: "/login"            , iconName: logInOutline},
];