import React, { useEffect, useState } from 'react';
import { IonCard, IonCardContent, IonContent, IonIcon, IonItem, IonText } from '@ionic/react';
import Firebase from '../../../firebase';
import CardHeader from '../../../components/Card/CardHeader';
import { addCircleOutline } from 'ionicons/icons';
import { UserShoppingLists, CurrentShoppingList, InvitedToShoppingList } from '../interfaces/UserShoppingLists';
import uuid from "uuid";
import SingleInviteList from './SupportingComponents/SingleInviteList';
import SingleCurrentList from './SupportingComponents/SingleCurrentList';
import { ShoppingListInfo } from '../interfaces/ShoppingListInfo';

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

  ////////////////////////////
  /*Hook Initialisation*/
  ////////////////////////////
  
  const [isCurrentLists , setIsCurrentLists]  = useState(false);
  const [isInvites      , setIsInvites]       = useState(false);
  const [currentLists , setCurrentLists]  = useState([] as CurrentShoppingList[]);
  const [invites      , setInvites]       = useState([] as InvitedToShoppingList[]);

  ////////////////////////////
  /*Database Values Initialisation*/
  ////////////////////////////
  
  useEffect(() => {
    firebase.db.ref('user-shopping-lists/' + firebase.auth.currentUser?.uid).on("value", snapshot => {
      console.log(snapshot);
      if (snapshot && snapshot.exists()) {
        console.log("Existing Data!", snapshot.val());
        
        //Get Arrays
        let currentLists : UserShoppingLists = snapshot.val() as UserShoppingLists;
        
        //Set Arrays
        setCurrentLists(currentLists.currentLists);
        setInvites(currentLists.invitedLists);

        //Set Booleans
        setIsCurrentLists( (currentLists.currentLists.length === 0) ? false : true);
        setIsCurrentLists( (currentLists.invitedLists.length === 0) ? false : true);

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
          console.log("Pressed");
        }}
      >
        <IonItem color="success" lines="none">
          <IonIcon icon={addCircleOutline} slot="start"/>
          <IonText>{"Press to Create a New Shopping List"}</IonText>
        </IonItem>
      </IonCard>


      {
        isCurrentLists 
        ? <div></div>
        : <IonCard>
            <IonCardContent>
              <IonText ><i>{"You are currently not part of any shopping list. Create one by pressing the \"Create Shopping List\" button above"}</i></IonText>
            </IonCardContent>
            {invites.map((list : CurrentShoppingList) => <SingleCurrentList data= {list} key={uuid.v4()}/>)}
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
