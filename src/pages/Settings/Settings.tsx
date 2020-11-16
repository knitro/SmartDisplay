import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Header from '../../components/Header/Header';
import WorkInProgress from '../../components/WorkInProgress/WorkInProgress';

const Settings: React.FC = () => {

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <IonPage>

      <Header headerLabel="Settings"/>

      <IonContent>
        <WorkInProgress name={"Settings"}/>
      </IonContent>
    </IonPage>
  );
};

export default Settings;