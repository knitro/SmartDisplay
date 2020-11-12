import React from 'react';
import { SubScreenEnums } from '../../../subScreens/SubScreenEnums';
import SingleScreen from '../../SingleScreen/SingleScreen';

const Notes_Default: React.FC = () => {

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <SingleScreen 
      labelText={"Notes"}
      screenType={SubScreenEnums.NOTES}
    />
  );
};

export default Notes_Default;