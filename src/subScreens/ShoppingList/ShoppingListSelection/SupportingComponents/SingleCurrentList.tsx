import { IonCard, IonCardContent, IonText } from '@ionic/react';
import React from 'react';
import CardHeader from '../../../../components/Card/CardHeader';
import { CurrentShoppingList } from '../../interfaces/UserShoppingLists';

////////////////////////////////////////////////////////
/*Props for SingleScreen*/
////////////////////////////////////////////////////////

interface Current_Props {
  data : CurrentShoppingList
}

////////////////////////////////////////////////////////
/*SingleScreen*/
////////////////////////////////////////////////////////

const SingleCurrentList: React.FC<Current_Props> = (props : Current_Props) => {

  ////////////////////////////
  /*Variable Initialisation*/
  ////////////////////////////

  const data = props.data;
  const name : string = data.name;
  const subtitle : string = data.subtitle;
  const uid : string = data.uid;
  const otherUsers : string[] = data.otherUsers;
  
  let otherUsersString : string = "";
  otherUsers.forEach((currentUser : string) => {otherUsersString = otherUsersString + currentUser + ", "});
  const finalString = otherUsersString.slice(0, -1);

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <IonCard>
      <CardHeader title={subtitle} subtitle={name}/>
      <IonCardContent>
        <IonText>
          <b>{"UID"}</b>
          {uid}
        </IonText>
      </IonCardContent>
      <IonCardContent>
        <IonText>
          <b>{"Members: "}</b>
          {finalString}
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default SingleCurrentList;
