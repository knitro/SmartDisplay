import React from 'react';
import { IonText } from '@ionic/react';
import { SubScreenEnums } from '../../subScreens/SubScreenEnums';
import WorkInProgress from '../WorkInProgress/WorkInProgress';
import TimeScreen from '../../subScreens/Time/TimeScreen';
import ShoppingListScreen from '../../subScreens/ShoppingList/ShoppingListScreen';
import Firebase, { FirebaseContext } from '../../firebase';

////////////////////////////////////////////////////////
/*Props for SubScreen*/
////////////////////////////////////////////////////////

interface SubScreen_Props {
  screenType  : SubScreenEnums,
}

////////////////////////////////////////////////////////
/*SubScreen*/
////////////////////////////////////////////////////////

const SubScreen: React.FC<SubScreen_Props> = (props : SubScreen_Props) => {

  ////////////////////////////
  /*Variable Initialisations*/
  ////////////////////////////

  const screenType : SubScreenEnums = props.screenType;

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  if (screenType === SubScreenEnums.CALENDAR) {
    return (
      <WorkInProgress name={"Calendar"}/>
    );
  }
  else if (screenType === SubScreenEnums.CURRENT_EVENTS) {
    return (
      <WorkInProgress name={"Current Events"}/>
    );
  }
  else if (screenType === SubScreenEnums.NOTES) {
    return (
      <WorkInProgress name={"Notes"}/>
    );
  }
  else if (screenType === SubScreenEnums.SHOPPING_LIST) {
    return (
      <FirebaseContext.Consumer>
        {(firebase : Firebase) =>  <ShoppingListScreen firebase={firebase}/>}
      </FirebaseContext.Consumer>
    );
  }
  else if (screenType === SubScreenEnums.TIME) {
    return (
      <TimeScreen />
    );
  }
  else if (screenType === SubScreenEnums.TODO_LIST) {
    return (
      <WorkInProgress name={"Todo List"}/>
    );
  }
  else {
    return (
      <IonText>{"Error, ScreenType not Recognised!"}</IonText>
    );
  }
};

export default SubScreen;
