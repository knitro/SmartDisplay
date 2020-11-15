import React, { useEffect, useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonText } from '@ionic/react';
import { SubScreenEnums } from '../SubScreenEnums';

////////////////////////////////////////////////////////
/*Props for SingleScreen*/
////////////////////////////////////////////////////////

interface ShoppingList_Props {

}

////////////////////////////////////////////////////////
/*SingleScreen*/
////////////////////////////////////////////////////////

const ShoppingListScreen: React.FC<ShoppingList_Props> = (props : ShoppingList_Props) => {

  ////////////////////////////
  /*Hook Initialisation*/
  ////////////////////////////

  const [currentDate, setCurrentDate] = useState(new Date());
  
  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 1000)
  });

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <IonContent>
      <IonCard>
        
        <IonCardHeader>
          <IonCardSubtitle>{"NZDT Time"}</IonCardSubtitle>
          <IonCardTitle>{"Current Time"}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonText>{currentDate.toUTCString()}</IonText>
        </IonCardContent>

      </IonCard>
    </IonContent>
  );
};

export default ShoppingListScreen;
