import React, { useEffect, useState } from 'react';
import { IonCard, IonCardContent, IonContent, IonIcon, IonItem, IonText } from '@ionic/react';
import Firebase, { UserDataInterface } from '../../../firebase';
import CardHeader from '../../../components/Card/CardHeader';
import { addCircleOutline } from 'ionicons/icons';
import { UserShoppingLists, CurrentShoppingList, InvitedToShoppingList, emptyCurrentShoppingList } from '../interfaces/UserShoppingLists';
import uuid from "uuid";
import SingleInviteList from './SupportingComponents/SingleInviteList';
import SingleCurrentList from './SupportingComponents/SingleCurrentList';
import { ShoppingListInfo } from '../interfaces/ShoppingListInfo';
import { ShoppingState } from '../interfaces/ShoppingState';
import { ShoppingListPage } from '../ShoppingListScreen';

////////////////////////////////////////////////////////
/*Props for SingleScreen*/
////////////////////////////////////////////////////////

interface Current_Props {
  info : ShoppingListInfo
}

////////////////////////////////////////////////////////
/*SingleScreen*/
////////////////////////////////////////////////////////

const ShoppingListSelection: React.FC<Current_Props> = (props : Current_Props) => {

  ////////////////////////////
  /*Pre Database Variable Initialisation*/
  ////////////////////////////

  const info : ShoppingListInfo = props.info;
  const firebase : Firebase = info.firebase;
  const stateAdjuster : (state : ShoppingState) => void = info.stateAdjuster;

  ////////////////////////////
  /*Hook Initialisation*/
  ////////////////////////////
  
  const [isCurrentLists , setIsCurrentLists]  = useState(false);
  const [isInvites      , setIsInvites]       = useState(false);
  const [currentLists   , setCurrentLists]  = useState([] as CurrentShoppingList[]);
  const [invites        , setInvites]       = useState([] as InvitedToShoppingList[]);

  ////////////////////////////
  /*Database Values Initialisation*/
  ////////////////////////////
  
  useEffect(() => {
    console.log(firebase.auth.currentUser?.uid);
    firebase.db.ref('user-shopping-lists/' + firebase.auth.currentUser?.uid).on("value", snapshot => {
      console.log(snapshot);
      if (snapshot && snapshot.exists()) {
        console.log("Existing Data!", snapshot.val());
        
        /*Get List UIDs*/
        let userData : UserDataInterface = snapshot.val() as UserDataInterface;
        console.log("userData", userData)
        let currentUIDs : string[] = userData.lists;
        console.log("currentUIDs", currentUIDs)
        let invitedUIDs : string[] = userData.invited;
        console.log("invitedUIDs", invitedUIDs)

        /*Get Arrays*/
        let currentLists : UserShoppingLists = {
          currentLists : [],
          invitedLists : [],
        };

        //Append Current Shopping Lists
        if (currentUIDs !== undefined) {
          console.log("UIDs for Current Lists Exist")
          currentUIDs.forEach((currentUID : string) =>
            firebase.db.ref('shopping-lists/' + currentUID).on("value", snapshot => {
              if (snapshot && snapshot.exists()) {
                console.log("snapshot", snapshot.val());
                let currentData : CurrentShoppingList = snapshot.val() as CurrentShoppingList;
                currentLists.currentLists.push(currentData);
                console.log("After Additions", currentLists);
                setCurrentLists(currentLists.currentLists);
                setIsCurrentLists(true);
              }
            }
          ));
        }
        
        //Append Invited Shopping Lists
        if (invitedUIDs !== undefined) {
          console.log("UIDs for Invited Lists Exist")
          invitedUIDs.forEach((currentUID : string) =>
            firebase.db.ref('shopping-lists/' + currentUID).on("value", snapshot => {
              if (snapshot && snapshot.exists()) {
                let currentData : InvitedToShoppingList = snapshot.val() as InvitedToShoppingList;
                currentLists.invitedLists.push(currentData);
                setInvites(currentLists.invitedLists);
                setIsInvites(true);
              }
            }
          ));
        }

        console.log("currentLists", currentLists);

        /*Set Arrays*/
        setCurrentLists(currentLists.currentLists);
        setInvites(currentLists.invitedLists);

        /*Set Booleans*/
        setIsCurrentLists( (currentLists.currentLists.length === 0) ? false : true);
        setIsInvites( (currentLists.invitedLists.length === 0) ? false : true);

      } else {
        console.log("No Existing Data");
        setIsCurrentLists(false);
        setIsInvites(false);
      }
    });
  }, []);

  ////////////////////////////
  /*Post-Database Values Initialisation*/
  ////////////////////////////

  const inviteTitle : string = "You have " + invites.length + " invites";

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <IonContent>

      {/*//////////////////////////////*/}
      {/*Current Shopping Lists*/}
      {/*//////////////////////////////*/}

      <IonCard color="secondary">
        <CardHeader title={"Select a Shopping List"} subtitle={"Shopping List Selection"} />
      </IonCard>

      {/*Add New Shopping List Card*/}
      <IonCard color="success" button
        onClick={ () => {
          stateAdjuster({
            currentScreen : ShoppingListPage.LIST_ADD,
            selectedList  : emptyCurrentShoppingList
          })
        }}
      >
        <IonItem color="success" lines="none">
          <IonIcon icon={addCircleOutline} slot="start"/>
          <IonText>{"Press to Create a New Shopping List"}</IonText>
        </IonItem>
      </IonCard>


      {
        isCurrentLists 
        ? <div>
          {currentLists.map((list : CurrentShoppingList) => <SingleCurrentList data= {list} key={uuid.v4()}/>)}
        </div>
        : <IonCard>
            <IonCardContent>
              <IonText ><i>{"You are currently not part of any shopping list. Create one by pressing the \"Create Shopping List\" button above"}</i></IonText>
            </IonCardContent>
          </IonCard>
      }
      {/*Time Card*/}
      
      
      {/*//////////////////////////////*/}
      {/*Invited Shopping Lists*/}
      {/*//////////////////////////////*/}

      {
        isInvites
        ? <div>
            <IonCard color="secondary">
              <CardHeader title={inviteTitle} subtitle={"Shopping List Selection"} />
            </IonCard>
            {invites.map((list : InvitedToShoppingList) => <SingleInviteList data= {list} key={uuid.v4()}/>)}
          </div>
        : <div></div>
      }
      

    </IonContent>
  );
};

export default ShoppingListSelection;
