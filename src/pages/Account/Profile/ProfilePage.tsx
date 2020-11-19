import { IonButton, IonCard, IonCardContent, IonContent, IonPage, IonText } from '@ionic/react';
import React from 'react';
import CardHeader from '../../../components/Card/CardHeader';
import Header from '../../../components/Header/Header';
import History from "../../../logic/History";
import Firebase from '../../../firebase';

interface ProfileProps {
  firebase : Firebase
}

const ProfilePage: React.FC<ProfileProps> = (props : ProfileProps) => {

  ////////////////////////////
  /*Initialisation*/
  ////////////////////////////

  let firebase : Firebase = props.firebase;
  let currentUser = firebase.auth.currentUser;


  console.log("Current User");
  console.log(currentUser);

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <IonPage>

      <Header headerLabel={"Profile"}/>

      <IonContent>

        {/*Header Card*/}
        <IonCard color="secondary">
          <CardHeader title={""} subtitle="Your Account Details" />
        </IonCard>

        {/*Content Card*/}
        <IonCard>
          <IonCardContent>
            <IonText>{"Username: "}</IonText>
            <IonText>{currentUser?.displayName}</IonText>
          </IonCardContent>
          <IonCardContent>
            <IonText>{"Email: "}</IonText>
            <IonText>{currentUser?.email}</IonText>
          </IonCardContent>
          <IonCardContent>
            <IonText>{"UID: "}</IonText>
            <IonText>{currentUser?.uid}</IonText>
          </IonCardContent>
        </IonCard>

        {/*Header Card*/}
        <IonCard color="secondary">
          <CardHeader title={""} subtitle="Other" />
        </IonCard>

        {/*Other Content Card*/}
        <IonCard>

          {/*Log Out Button*/}
          <IonCardContent>
          <IonButton 
              color="secondary"
              onClick={() => {
                firebase.doSignOut();
                History.push("/");
              }}
            >
              {"Log Out"}
            </IonButton>
          </IonCardContent>
        </IonCard>


      </IonContent>

    </IonPage>
  );
};

export default ProfilePage; 