import React, { useState } from 'react';
import { IonAlert, IonButton, IonCard, IonCardContent, IonContent, IonInput, IonLoading, IonPage, IonText } from '@ionic/react';
import Header from '../../../components/Header/Header';
import CardHeader from '../../../components/Card/CardHeader';
import Firebase from '../../../firebase';
import { LoginInfo, submitLoginButtonPress } from './LoginLogic';
import History from '../../../logic/History';

interface LoginProps {
  firebase : Firebase
}

const LoginForm : React.FC<LoginProps> = (props: LoginProps) => {

  /*Hook Initialisation*/
  const [email,           setEmail]           = useState("");
  const [password,        setPassword]        = useState("");
  const [showLoading,     setShowLoading]     = useState(false);
  const [showAlert,       setShowAlert]       = useState(false);

  //////////////////////////////
  /*Render Return*/
  //////////////////////////////

  return (

    <IonPage>
      
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
        duration={10000}
      />

      <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass='failed'
          header={'Error'}
          subHeader={'Failed to Login'}
          message={'Please check your internet connection and re-login.'}
          buttons={['Okay!']}
      />

      {/*Display Header*/}
      <Header headerLabel={"Login"}/>

      <IonContent fullscreen>

      {/* Card 1:  Login Header*/}
      <IonCard>
        <CardHeader title={"Login"} subtitle={"Login into your SmartAccount Here"} />
      </IonCard>

      {/* Card 2:  Form Card*/}
      <IonCard>
        <CardHeader title={"Login Details"} subtitle={"Authenticate below"} />
        
        <IonCardContent>

          {/*Email Address Form*/}
          <IonText>{"Email Address"}</IonText>
          <IonInput
            type="email"
            inputmode="email"
            clearInput={true}
            autocomplete="email"
            placeholder={"Your Email Here"}
            onChange={(event : any) => {setEmail(event.target.value);}}
            required={true}
            clearOnEdit={false}
          />

          {/*Password Form*/}
          <IonText>{"Password"}</IonText>
          <IonInput 
            type="password"
            inputmode="text"
            clearInput={true}
            autocomplete="off"
            placeholder={"Your Password Here"}
            onChange={(event : any) => {setPassword(event.target.value);}}
            required={true}
            clearOnEdit={false}
          />

        </IonCardContent>
      </IonCard>

      {/* Card 3: Login Button*/}
      <IonCard>
        <IonButton
          expand="full" 
          fill="solid"
          color="primary"
          type="submit"
          title="Login"
          onClick={(event) => {
            let suppliedInfo : LoginInfo = {
              email           : email,
              password        : password,
            }
            submitLoginButtonPress(suppliedInfo, props.firebase, setShowLoading, setShowAlert);
          }}
        />
      </IonCard>
      
      {/* Card 4:  Sign Up Header*/}
      <IonCard>
        <CardHeader title={"Sign Up!"} subtitle={"Press the button below if you don't have a MTG Squire Account"} />
      </IonCard>
      
      {/* Card 5:  SignUp Button*/}
      <IonCard>
        {/*Search Button*/}
        <IonButton
          expand="full" 
          fill="solid"
          color="primary"
          type="submit"
          title="Sign Up"
          onClick={() => {
            History.push("/profile")
          }}
        />
      </IonCard>
      
      </IonContent>
    </IonPage>
  );
}

export default LoginForm;