import React from 'react';
import { SubScreenEnums } from '../../../subScreens/SubScreenEnums';
import SingleScreen from '../../SingleScreen/SingleScreen';

const ShoppingList_Default: React.FC = () => {

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <SingleScreen 
      labelText={"Shopping List"}
      screenType={SubScreenEnums.SHOPPING_LIST}
    />
  );
};

export default ShoppingList_Default;