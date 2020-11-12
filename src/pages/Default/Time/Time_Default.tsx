import React from 'react';
import { SubScreenEnums } from '../../../subScreens/SubScreenEnums';
import SingleScreen from '../../SingleScreen/SingleScreen';

const Time_Default: React.FC = () => {

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <SingleScreen 
      labelText={"Time"}
      screenType={SubScreenEnums.TIME}
    />
  );
};

export default Time_Default;