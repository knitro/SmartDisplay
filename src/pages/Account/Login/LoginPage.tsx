import React, { useState } from 'react';
import { IonAlert, IonButton, IonCard, IonCardContent, IonContent, IonInput, IonLoading, IonPage, IonText } from '@ionic/react';
import Header from '../../../components/Header/Header';
import CardHeader from '../../../components/Card/CardHeader';
import Firebase from '../../../firebase';
import { LoginInfo, submitLoginButtonPress } from './LoginLogic';
import { useHistory } from 'react-router';

interface LoginProps {
  firebase : Firebase
}

const LoginForm : React.FC<LoginProps> = (props: LoginProps) => {

  /*Hook Initialisation*/
  const [email,           setEmail]           = useState("");
  const [password,        setPassword]        = useState("");
  const [showLoading,     setShowLoading]     = useState(false);
  const [showAlert,       setShowAlert]       = useState(false);
  const history = useHistory();

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
        <IonCard color="secondary">
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

            {/*Login Button*/}
            <IonButton
              expand="full" 
              fill="solid"
              color="primary"
              type="submit"
              onClick={() => {
                let suppliedInfo : LoginInfo = {
                  email           : email,
                  password        : password,
                }
                submitLoginButtonPress(suppliedInfo, props.firebase, setShowLoading, setShowAlert);
              }}
            >
              {"Log In"}
            </IonButton>

          </IonCardContent>
        </IonCard>
        
        {/* Card 3:  Sign Up*/}
        <IonCard>
          <CardHeader title={"Sign Up!"} subtitle={"Press the button below if you don't have a SmartAccount"} />

          <IonCardContent>

            {/*Search Button*/}
            <IonButton
              expand="full" 
              fill="solid"
              color="primary"
              type="submit"
              title="Sign Up"
              onClick={() => {
                history.push("/register");
              }}
            >
              {"Sign Up"}
            </IonButton>
          </IonCardContent>
        </IonCard>
      
      </IonContent>
    </IonPage>
  );
}

export default LoginForm;