import { IonButton, IonCard, IonCardContent, IonContent, IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import CardHeader from '../../../components/Card/CardHeader';
import Firebase, { UserDataInterface } from '../../../firebase';
import { ShoppingListInfo } from '../interfaces/ShoppingListInfo';
import { ShoppingState } from '../interfaces/ShoppingState';
import { emptyCurrentShoppingList } from '../interfaces/UserShoppingLists';
import { ShoppingListPage } from '../ShoppingListScreen';
import uuid from 'uuid';
import { useHistory } from 'react-router';

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
  const history = useHistory();

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

            //Check if there is an authenticated user or not
            if (firebase.auth.currentUser !== null) {

              /*Create a new UID*/
              let uid : string = uuid.v4();
              let referenceString : string = 'shopping-lists/' + uid;

              /*Create the Shopping List*/
              //Get the Database Once
              firebase.db.ref(referenceString).once("value", snapshot => {

                //If an existing value
                if (snapshot && snapshot.exists()) {
                  //TODO Handle this
                  console.log("ERROR: UUID generated is duplicate");
                } else { //Otherwise create a new entry
              
                  firebase.db.ref(referenceString)
                  .set({
                    "name"          : nameOfList,
                    "subtitle"      : subtitle,
                    "uid"           : uid,
                    "otherUsers"    : [firebase.auth.currentUser?.uid],
                  });
                }
              });
              console.log("Created Shopping List");

              /*Append to your user*/
              const userReferenceString : string = 'user-shopping-lists/' + firebase.auth.currentUser?.uid + '/lists';
              firebase.db.ref('user-shopping-lists/' + firebase.auth.currentUser?.uid + '/lists').once("value", snapshot => {

                //If an existing value
                if (snapshot && snapshot.exists()) {
                  console.log("Existing User Info");

                  let currentData : UserDataInterface = snapshot.val() as UserDataInterface;
                  currentData.lists.push(uid);
                  firebase.db.ref('user-shopping-lists/' + firebase.auth.currentUser?.uid + '/lists')
                  .set({
                    "lists": currentData, 
                  });
                } else { //Otherwise create a new entry
              
                  firebase.db.ref('user-shopping-lists/' + firebase.auth.currentUser?.uid)
                  .set({
                    "lists"   : [uid],
                    "invited" : [],
                  });
                }
              });
              console.log("Appended List data to User");
              
            } else {
              console.log("WARNING: This should not have happened");
              history.push("/login");
            }
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
