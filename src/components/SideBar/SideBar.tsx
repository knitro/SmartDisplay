import React, { Component } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonMenu, IonContent, IonList, IonItem, IonMenuToggle, IonIcon, IonText } from "@ionic/react";
import { timeOutline, calendarOutline, newspaperOutline, listOutline, createOutline, cartOutline, desktopOutline } from 'ionicons/icons';
import uuid from 'uuid';

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
  
  //Items on the Sidebar
  sideBarItems : SideBarItem[]= [
    {label: "Time"            , path: "/time"             , iconName: timeOutline},
    {label: "Calendar"        , path: "/calendar"         , iconName: calendarOutline},
    {label: "Current Events"  , path: "/currentEvents"    , iconName: newspaperOutline},
    {label: "Notes"           , path: "/notes"            , iconName: createOutline},
    {label: "ToDo List"       , path: "/todoList"         , iconName: listOutline},
    {label: "Shopping List"   , path: "/shoppingList"     , iconName: cartOutline},
  ];

  ////////////////////////
  /*Methods*/
  ////////////////////////

  /**
   * Renders the Menu Item (Used in the Render)
   * @param currentItem - the SideBarItem to render
   */
  renderMenuItem (currentItem: SideBarItem) {
    return (
      <IonMenuToggle auto-hide="false" key={uuid.v4()}>
        <IonItem href={currentItem.path}>
          <IonIcon icon={currentItem.iconName} slot="start"/>
          <IonText>{currentItem.label}</IonText>
        </IonItem>
      </IonMenuToggle>
    );
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

        <IonContent>
          <IonList>
            {/* Creates the SideBar Items through calling the renderMenuItem for each item in the sideBarItems array*/}
            {this.sideBarItems.map((currentItem: SideBarItem) => this.renderMenuItem(currentItem))}
          </IonList>
        </IonContent>

      </IonMenu>
    );
  }
}

export default SideBar;