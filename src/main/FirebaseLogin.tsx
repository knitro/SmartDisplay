import React, { useEffect } from 'react';
import Firebase from '../firebase';
import { cacheLoginState } from '../state/LoginState';

/**
 * Main Props
 */
interface FirebaseLoginProps {
  firebase : Firebase
}

/**
 * Empty Component that uses the Firebase Prop to get the cached login details.
 */
const FirebaseLogin: React.FC<FirebaseLoginProps> = (props : FirebaseLoginProps) => {

  ////////////////////////////
  /*Initialisation*/
  ////////////////////////////

  let firebase = props.firebase;

  useEffect(() => {
    firebase.auth.onAuthStateChanged(function(user) {
      cacheLoginState.authenticatedUser = user;
      console.log(cacheLoginState);
      console.log("Loaded Cached LoginState with", cacheLoginState.authenticatedUser.displayName);
    });
  }, [firebase.auth]);

  ////////////////////////////
  /*Return*/
  ////////////////////////////
  return (
    <div></div>
  )
}

export default FirebaseLogin;