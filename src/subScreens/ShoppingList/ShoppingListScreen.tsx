import React from 'react';
import Firebase from '../../firebase';
import ShoppingListSelection from './ShoppingListSelection/ShoppingListSelection';

////////////////////////////////////////////////////////
/*Props for SingleScreen*/
////////////////////////////////////////////////////////

interface ShoppingList_Props {
  firebase : Firebase
}

////////////////////////////////////////////////////////
/*SingleScreen*/
////////////////////////////////////////////////////////

const ShoppingListScreen: React.FC<ShoppingList_Props> = (props : ShoppingList_Props) => {

  ////////////////////////////
  /*Pre Database Variable Initialisation*/
  ////////////////////////////

  const firebase : Firebase = props.firebase;

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <ShoppingListSelection firebase={firebase}/>
  );
};

export default ShoppingListScreen;
