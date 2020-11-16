import React, { Component } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonMenu, IonContent, IonList, IonItem, IonMenuToggle, IonIcon, IonText } from "@ionic/react";
import { timeOutline, calendarOutline, newspaperOutline, listOutline, createOutline, cartOutline, desktopOutline, logInOutline, settingsOutline, personCircle } from 'ionicons/icons';
import uuid from 'uuid';
import LoginStateContext from '../../state/LoginState';
import History from '../../logic/History';

////////////////////////
/*Interfaces*/
////////////////////////

//The Interface used for containing the important data when constructing a SideBar Item.
interface SideBarItem {
  label : string,
  path : string,
  iconName : string
}

class SideBar extends Component {

  ////////////////////////
  /*Fields*/
  ////////////////////////
  
  /*Main Sidebar Items*/
  sideBarItems : SideBarItem[]= [
    {label: "Time"            , path: "/time"             , iconName: timeOutline},
    {label: "Calendar"        , path: "/calendar"         , iconName: calendarOutline},
    {label: "Current Events"  , path: "/currentEvents"    , iconName: newspaperOutline},
    {label: "Notes"           , path: "/notes"            , iconName: createOutline},
    {label: "ToDo List"       , path: "/todoList"         , iconName: listOutline},
    {label: "Shopping List"   , path: "/shoppingList"     , iconName: cartOutline},
    {label: "Settings"        , path: "/settings"         , iconName: settingsOutline},
  ];

  /*Logged In Sidebar Items*/
  loggedInItems : SideBarItem[]= [
    {label: "My Profile"      , path: "/myProfile"        , iconName: personCircle},
  ];

  /*Logged Out Sidebar Items*/
  loggedOutItems : SideBarItem[]= [
    {label: "Log In"          , path: "/login"            , iconName: logInOutline},
  ];

  ////////////////////////
  /*Methods*/
  ////////////////////////

  /**
   * Renders all the Menu Items for the Sidebar.
   */
  renderAllMenuItems() {
    return (
      <IonContent>
        <IonList>

          {/* Creates the Default SideBar Items through calling the renderMenuItem for each item in the sideBarItems array*/}
          {this.sideBarItems.map((currentItem: SideBarItem) => this.renderMenuItem(currentItem))}

          {/* Depending on LoginState, Display Menu Items*/}
          <LoginStateContext.Consumer>
            {currentLoginState =>
              <div>
                {(currentLoginState.authenticatedUser !== null) ?
                  this.renderLoggedIn() : this.renderLoggedOut()
                }
              </div> 
            }
          </LoginStateContext.Consumer>
        </IonList>
      </IonContent>
    )
  }

  /**
   * Renders the Menu Item (Used in the Render)
   * @param currentItem - the SideBarItem to render
   */
  renderMenuItem (currentItem: SideBarItem) {

    return (
      <IonMenuToggle auto-hide="false" key={uuid.v4()}>
        
        <IonItem 
          onClick={() => {
            History.push(currentItem.path);
          }}
        >
          <IonIcon icon={currentItem.iconName} slot="start"/>
          <IonText>{currentItem.label}</IonText>
        </IonItem>
      </IonMenuToggle>
    );
  }

  renderLoggedIn() {
    return (
      <div>
        {this.loggedInItems.map((currentItem: SideBarItem) => this.renderMenuItem(currentItem))}
      </div>
    )
  }

  renderLoggedOut() {
    return (
      <div>
        {this.loggedOutItems.map((currentItem: SideBarItem) => this.renderMenuItem(currentItem))}
      </div>
    )
  }

  ////////////////////////
  /*Render*/
  ////////////////////////

  render() {

    return (
      <IonMenu side="start" type="overlay" contentId="main">
        <IonHeader>
          <IonToolbar color="primary">
            <IonItem color="primary">
              <IonIcon icon={desktopOutline} slot="start" size="large"/>
              <IonTitle>{"SmartDisplay"}</IonTitle>
            </IonItem>
          </IonToolbar>
        </IonHeader>

        {this.renderAllMenuItems()}

      </IonMenu>
    );
  }
}

export default SideBar;