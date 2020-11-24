import React from 'react';
import WorkInProgress from '../../components/WorkInProgress/WorkInProgress';
import Firebase from '../../firebase';
import { ShoppingListInfo } from './interfaces/ShoppingListInfo';
import { ShoppingState } from './interfaces/ShoppingState';
import { CurrentShoppingList, emptyCurrentShoppingList } from './interfaces/UserShoppingLists';
import ShoppingListSelection from './ShoppingListSelection/ShoppingListSelection';

////////////////////////////////////////////////////////
/*Enums*/
////////////////////////////////////////////////////////

export enum ShoppingListPage {
  LIST_SELECTION, LIST_ADD, LIST_EDIT, LIST_VIEW, 
  ITEM_ADD, ITEM_EDIT, ITEM_VIEW
}

////////////////////////////////////////////////////////
/*Props and State*/
////////////////////////////////////////////////////////

interface Current_Props {
  firebase : Firebase
}

////////////////////////////////////////////////////////
/*ShoppingListScreen*/
////////////////////////////////////////////////////////

class ShoppingListScreen extends React.Component<Current_Props, ShoppingState> {

  ////////////////////////
  /*"Constant" Variables*/
  ////////////////////////

  firebase : Firebase;

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(props : Current_Props) {
    super(props);
    this.firebase = props.firebase;
    this.state = {
      currentScreen :  ShoppingListPage.LIST_SELECTION,
      selectedList  :  emptyCurrentShoppingList,    
    }
  }

  ////////////////////////
  /*Methods*/
  ////////////////////////

  /**
   * Updates the Components when async results.
   */
  async componentDidMount() {}


  /**
   * Sets the State of the class, hence updating the state. 
   * This function is to be passed on and used for adjusting the state.
   * @param state 
   */
  setStateFunction = (state: ShoppingState) => {
    this.setState(state);
  }

  ////////////////////////////
  /*Render*/
  ////////////////////////////

  render() {

    let info : ShoppingListInfo = {
      firebase : this.firebase,
      stateAdjuster : this.setStateFunction
    }

    if (this.state.currentScreen === ShoppingListPage.LIST_SELECTION) {
      return (
        <ShoppingListSelection info={info}/>
      );
    }
    else if (this.state.currentScreen === ShoppingListPage.LIST_ADD) {
      return (
        <WorkInProgress name={"List Add"}/>
      );
    }
    else if (this.state.currentScreen === ShoppingListPage.LIST_EDIT) {
      return (
        <WorkInProgress name={"List Edit"}/>
      );
    }
    else if (this.state.currentScreen === ShoppingListPage.LIST_VIEW) {
      return (
        <WorkInProgress name={"List View"}/>
      );
    }
    else if (this.state.currentScreen === ShoppingListPage.ITEM_ADD) {
      return (
        <WorkInProgress name={"Item Add"}/>
      );
    }
    else if (this.state.currentScreen === ShoppingListPage.ITEM_EDIT) {
      return (
        <WorkInProgress name={"Item Edit"}/>
      );
    }
    else if (this.state.currentScreen === ShoppingListPage.ITEM_VIEW) {
      return (
        <WorkInProgress name={"Item View"}/>
      );
    }
    else {
      console.log("This should not happen");
      return (
        <WorkInProgress name={"This should not happen."}/>
      )
    }

    
  }
};

export default ShoppingListScreen;
