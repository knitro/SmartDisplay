import React from 'react';
import { SubScreenEnums } from '../../../subScreens/SubScreenEnums';
import SingleScreen from '../../SingleScreen/SingleScreen';

const Calendar_Default: React.FC = () => {

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <SingleScreen 
      labelText={"Calendar"}
      screenType={SubScreenEnums.CALENDAR}
    />
  );
};

export default Calendar_Default;