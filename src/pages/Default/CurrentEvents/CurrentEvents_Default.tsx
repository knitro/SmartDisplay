import React from 'react';
import { SubScreenEnums } from '../../../subScreens/SubScreenEnums';
import SingleScreen from '../../SingleScreen/SingleScreen';

const CurrentEvents_Default: React.FC = () => {

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <SingleScreen 
      labelText={"Current Events"}
      screenType={SubScreenEnums.CURRENT_EVENTS}
    />
  );
};

export default CurrentEvents_Default;