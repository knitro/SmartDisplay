import React from 'react';
import { IonAlert, IonButton, IonCard, IonCardContent, IonContent, IonInput, IonLoading, IonPage, IonText } from '@ionic/react';
import Header from '../../../components/Header/Header';
import Firebase from '../../../firebase';
import { checkPasswordValidity, SignUpInfo, submitButtonPress } from './RegisterLogic';
import CardHeader from '../../../components/Card/CardHeader';

interface RegisterProps {
  firebase : Firebase
}

const RegisterPage : React.FC<RegisterProps> = (props: RegisterProps) => {

  /*Hook Initialisation*/
  const [username,        setUsername]        = React.useState("");
  const [email,           setEmail]           = React.useState("");
  const [password,        setPassword]        = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [showLoading,     setShowLoading]     = React.useState(false);
  const [showAlert,       setShowAlert]       = React.useState(false);

  /*Validity Hooks*/
  const [usernameValid, setUsernameValid]     = React.useState(false);
  const [emailValid,    setEmailValid]        = React.useState(false);
  const [passwordValid, setPasswordValid]     = React.useState(false);
  // const [buttonAvail,   setButtonAvail]       = React.useState(false);
  const [buttonAvail,   setButtonAvail]       = React.useState(true);
  
  //////////////////////////////
  /*Hook Functions*/
  //////////////////////////////

  /**
   * Function Check for Button Availability.
   */
  const buttonCheckAvailability = () => {

    setButtonAvail(true);
    return;
    //Code below doesn't work due to delayed responses of the update hooks.
    // Functionality can be extended to implement this and have the button disable itself.
    // if (usernameValid && emailValid && passwordValid) {
    //   setButtonAvail(true);
    // } else {
    //   setButtonAvail(false);
    // }
    // console.log("password = " + password);
    // console.log("passwordConfirm = " + passwordConfirm);
    // console.log("passwordValid = " + passwordValid);
    // console.log("buttonAvail = " + buttonAvail);
  }

  /**
   * Updates the Username Form, and performs a check to see whether the input is valid or not.
   * This function will then call the function "buttonCheckAvailability()", which will set the 
   *  submission's button availability depending on the new updated validities.
   * @param input - the new username
   */
  const updateFormUsername = (input : string) => {
    setUsername(input);
    if (username.length > 3) {
      setUsernameValid(true);
    } else {
      setUsernameValid(false);
    }
    buttonCheckAvailability();
  }

  /**
   * Updates the Email Form, and performs a check to see whether the input is valid or not.
   * This function will then call the function "buttonCheckAvailability()", which will set the 
   *  submission's button availability depending on the new updated validities.
   * @param input 
   */
  const updateFormEmail = (input : string) => {
    setEmail(input);
    if (email.includes("@") && email.includes(".")) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    buttonCheckAvailability();
  }

  /**
   * Updates the Password Form, and performs a check to see whether the input is valid or not.
   * This function will also then call the function "buttonCheckAvailability()", which will set the 
   *  submission's button availability depending on the new updated validities.
   * @param input 
   */
  const updateFormPassword = (input : string) => {
    setPassword(input);
    setPasswordValid(checkPasswordValidity(password, passwordConfirm));
    buttonCheckAvailability();
  }

  /**
   * Updates the Password Confirm Form, and performs a check to see whether the input is valid or not.
   * This function will also then call the function "buttonCheckAvailability()", which will set the 
   *  submission's button availability depending on the new updated validities.
   * @param input 
   */
  const updateFormPasswordConfirm = (input : string) => {
    setPasswordConfirm(input);
    setPasswordValid(checkPasswordValidity(password, passwordConfirm));
    buttonCheckAvailability();
  }

  //////////////////////////////
  /*Render Return*/
  //////////////////////////////

  return (

    <IonPage>

      <Header headerLabel="Register" />
      
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
          subHeader={'Failed to Register Account'}
          message={'Please check that your passwords match and all other conditions are met.'}
          buttons={['Okay!']}
      />

      <IonContent>

        {/* Card 1:  SignUp Header*/}
        <IonCard color="secondary">
          <CardHeader title={"Register a SmartAccount!"} subtitle={"Get Access to Shared Shopping Lists and More!"} />
        </IonCard>

        {/* Card 2:  Form Card*/}
        <IonCard>
          <CardHeader title={"Details"} subtitle={"Add your account details below"} />
          
          <IonCardContent>
            
            {/*Username Form*/}
            <IonText>{"Username"}</IonText>
            <IonInput
              type="text"
              inputmode="text"
              clearInput={true}
              autocomplete="username"
              placeholder={"Insert your Username Here"}
              onChange={(event : any) => {updateFormUsername(event.target.value);}}
              required={true}
              clearOnEdit={false}
            />

            {/*Email Address Form*/}
            <IonText>{"Email Address"}</IonText>
            <IonInput
              type="email"
              inputmode="email"
              clearInput={true}
              autocomplete="email"
              placeholder={"Insert your Email Address Here"}
              onChange={(event : any) => {updateFormEmail(event.target.value);}}
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
              placeholder={"Enter your Password Here"}
              onChange={(event : any) => {updateFormPassword(event.target.value);}}
              required={true}
              clearOnEdit={false}
            />

            {/*Password Confirm Form*/}
            <IonText>{"Confirm Password"}</IonText>
            <IonInput 
              type="password"
              inputmode="text"
              clearInput={true}
              autocomplete="off"
              placeholder={"Re-Enter your Password Here"}
              onChange={(event : any) => {updateFormPasswordConfirm(event.target.value);}}
              required={true}
              clearOnEdit={false}
            />

            {/*Sign Up Button Button*/}
            <IonButton 
              disabled={!buttonAvail}
              color="secondary"
              onClick={(event) => {
                let suppliedInfo : SignUpInfo = {
                  username        : username,
                  email           : email,
                  password        : password,
                  passwordConfirm : passwordConfirm,
                }
                submitButtonPress(suppliedInfo, props.firebase, setShowLoading, setShowAlert);
              }}
            >
              {"Sign Up!"}
            </IonButton>

          </IonCardContent>
        </IonCard>

      </IonContent>
      
    </IonPage>
  );
}

export default RegisterPage;