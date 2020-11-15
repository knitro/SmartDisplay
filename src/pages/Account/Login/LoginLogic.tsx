import Firebase from "../../../firebase";
import History from "../../../logic/History";
import { defaultLoginState, LoginState, saveLogin } from "../../../state/LoginState"

export interface LoginInfo {
  email           : string
  password        : string
}

/**
 * Performs the logging in process of the App.
 * @param info - the Login Information supplied by the user
 * @param firebase - the firebase instance (generally from context)
 * @param loadingFunction - the loading function to show "progress"
 * @param errorFunction - the error function to show when something goes wrong
 */
export function submitLoginButtonPress(info : LoginInfo, firebase : Firebase, 
  loadingFunction : (value : boolean) => void, errorFunction : (value : boolean) => void) 
{

  loadingFunction(true);

  firebase
    .doSignInWithEmailAndPassword(info.email, info.password)
    .then(async () => {
      let currentLoginState : LoginState = Object.assign([], defaultLoginState);
      currentLoginState.authenticatedUser = firebase.auth.currentUser;
      await saveLogin(currentLoginState);
    })
    .then(() => {
      loadingFunction(false);
      console.log("Login Successful!");
      History.push("/profile");
    })
    .catch((error : any) => {
      loadingFunction(false);
      console.log(error);
      errorFunction(true);
      console.log("Login Failed!");
    });
}