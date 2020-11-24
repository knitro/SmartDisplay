import Firebase from "../../../firebase";
import History from "../../../logic/History";
import { defaultLoginState, LoginState, saveLogin } from "../../../state/LoginState";

const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 30;

/**
 * 
 */
export interface SignUpInfo {

  username        : string
  email           : string
  password        : string
  passwordConfirm : string

}

/**
 * Checks the Validity of the Passwords supplied
 * @param password - the password value
 * @param passwordConfirm - the password confirm value
 */
export function checkPasswordValidity(password : string, passwordConfirm : string) : boolean {

  //Null Check
  if ((password !== null) && (passwordConfirm !== null)) {
    //Check if the passwords are equal
    if (password.localeCompare(passwordConfirm) === 0) {
      //Check if the password meets the length requirements
      if ((password.length >= MIN_PASSWORD_LENGTH) && (password.length <= MAX_PASSWORD_LENGTH)) {
        return true;
      }
    }
  }

  //Return false if one of the conditions above fail
  return false;
}

/**
 * Signs up the user with the provided information.
 * @param info 
 * @param props 
 */
export function submitButtonPress(info : SignUpInfo, firebase : Firebase, 
    loadingFunction : (value : boolean) => void, alertFunction : (value : boolean) => void) 
{
 
  loadingFunction(true);

  firebase
    .doCreateUserWithEmailAndPassword(info.email, info.password)
    .then(async (authUser) => {

      if(authUser !== null) {
        authUser.updateProfile({
          displayName: info.username,
        });
        let currentLoginState : LoginState = Object.assign([], defaultLoginState);
        currentLoginState.authenticatedUser = firebase.auth.currentUser;
        await saveLogin(currentLoginState);
        return true;
      }
      return false;
    })
    .then((successful : boolean) => {
      loadingFunction(false);
      if (successful) {
        History.push("/login")
      }
    })
    .catch((error : any) => {
      loadingFunction(false);
      alertFunction(true);
      console.log(error);
    });
}