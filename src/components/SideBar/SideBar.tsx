import React, { Component } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonMenu, IonContent, IonList, IonItem, IonMenuToggle, IonIcon, IonText } from "@ionic/react";
import { searchOutline, search, cube, heartOutline, swapHorizontal, server, cash, chevronBackCircle, cogOutline, copy, alertCircle } from 'ionicons/icons';
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
    {label: "Quick Search", path: "/quick-search", iconName: searchOutline},
    {label: "Advanced Search", path: "/advanced-search", iconName: search},
    {label: "Dice", path: "/dice", iconName: cube},
    {label: "Life Counter", path: "/life-counter/new-game", iconName: heartOutline},
    {label: "Trade Cards", path: "/trade-cards", iconName: swapHorizontal},
    {label: "Rules", path: "/rules/overview", iconName: server},
    {label: "Set EVs", path: "/set-ev/overview", iconName: cash},
    {label: "Search History", path: "/search-history", iconName: chevronBackCircle},
    {label: "Settings", path: "/settings", iconName: cogOutline},
    {label: "Help", path: "/help", iconName: alertCircle}
  ];

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  //Currently Commented out since it is not necessary. Uncomment if adding "dependencies"
  // constructor(props : any) {
  //   super(props)
  // }

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
            <IonIcon icon={copy} slot="start" size="large"/>
            <IonTitle>{"MTG Squire"}</IonTitle>
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