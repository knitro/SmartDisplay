import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Header from '../../../components/Header/Header';
import WorkInProgress from '../../../components/WorkInProgress/WorkInProgress';

const Profile: React.FC = () => {

  const pageName : string = "Profile";

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <IonPage>

      <Header headerLabel={pageName}/>

      <IonContent>
        <WorkInProgress name={pageName}/>
      </IonContent>
    </IonPage>
  );
};

export default Profile; 