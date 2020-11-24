import { IonButton, IonCard, IonCardContent, IonContent, IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import CardHeader from '../../../components/Card/CardHeader';
import Firebase from '../../../firebase';
import { ShoppingListInfo } from '../interfaces/ShoppingListInfo';
import { ShoppingState } from '../interfaces/ShoppingState';
import { emptyCurrentShoppingList } from '../interfaces/UserShoppingLists';
import { ShoppingListPage } from '../ShoppingListScreen';

////////////////////////////////////////////////////////
/*Props for NewShoppingList*/
////////////////////////////////////////////////////////

interface Current_Props {
  info : ShoppingListInfo
}

////////////////////////////////////////////////////////
/*NewShoppingList*/
////////////////////////////////////////////////////////

const NewShoppingList: React.FC<Current_Props> = (props : Current_Props) => {

  ////////////////////////////
  /*Variable Initialisation*/
  ////////////////////////////

  const info : ShoppingListInfo = props.info;
  const firebase : Firebase = info.firebase;
  const stateAdjuster : (state : ShoppingState) => void = info.stateAdjuster;

  ////////////////////////////
  /*Hook Initialisation*/
  ////////////////////////////

  const [nameOfList , setNameOfList]  = useState("");
  const [subtitle   , setSubtitle]    = useState("");


  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <IonContent>

      {/*Header Card*/}
      <IonCard color="secondary">
        <CardHeader title={"Create a new Shopping List"} subtitle={"Enter the Details of your New List"} />
      </IonCard>

      {/*Contents of Creating a new Shopping List*/}
      <IonCard>
        <IonCardContent>
          <IonItem>
            <IonLabel position="floating">{"Name of List"}</IonLabel>
            <IonInput value={nameOfList} required onIonInput={(event : any) => {setNameOfList(event.target.value);}} placeholder={"Enter Name Here"}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">{"Subtitle of List"}</IonLabel>
            <IonInput value={subtitle} required onIonInput={(event : any) => {setSubtitle(event.target.value);}} placeholder={"Enter Name Here"}></IonInput>
          </IonItem>


          <IonButton color="secondary" onClick={() => {
            console.log("Pressed");
          }}>
            {"Create your New Shopping List"}
          </IonButton>

        </IonCardContent>
      </IonCard>
      
      <IonCard>
        <IonButton onClick={() => {
          stateAdjuster({
            currentScreen : ShoppingListPage.LIST_SELECTION,
            selectedList  : emptyCurrentShoppingList
          })
        }}>
          {"Go Back"}
        </IonButton>
      </IonCard>
      
    </IonContent>
  );
};

export default NewShoppingList;
