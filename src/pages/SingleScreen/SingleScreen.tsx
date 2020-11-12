import React, { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../../components/Header/Header';
import { SubScreenEnums } from '../../subScreens/SubScreenEnums';
import SubScreen from '../../components/SubScreen/SubScreen';

////////////////////////////////////////////////////////
/*Props for SingleScreen*/
////////////////////////////////////////////////////////

interface SingleScreen_Props {
  labelText   : string,
  screenType  : SubScreenEnums,
}

////////////////////////////////////////////////////////
/*SingleScreen*/
////////////////////////////////////////////////////////

const SingleScreen: React.FC<SingleScreen_Props> = (props : SingleScreen_Props) => {

  ////////////////////////////
  /*Variable Initialisations*/
  ////////////////////////////

  const labelText : string = props.labelText;
  const screenType : SubScreenEnums = props.screenType;

  ////////////////////////////
  /*Hook Initialisations*/
  ////////////////////////////

  const [isFullScreen, setFullScreen] = useState(false);

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <IonPage>

      {/*Display Header if not FullScreen*/}
      {(!isFullScreen) ? <Header headerLabel={labelText}/> : <div></div>}

      <IonContent fullscreen>
        <SubScreen screenType={screenType}/>
      </IonContent>

    </IonPage>
  );
};

export default SingleScreen;
