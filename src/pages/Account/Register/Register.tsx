import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Header from '../../../components/Header/Header';
import WorkInProgress from '../../../components/WorkInProgress/WorkInProgress';

const Register: React.FC = () => {

  const pageName : string = "Register";

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

export default Register; 