////////////////////////
/*Imports*/
////////////////////////

import { Plugins } from '@capacitor/core';
import React from 'react';
 
////////////////////////
/*Local Initialisation*/
////////////////////////

const { Storage } = Plugins;

const storageKey : string = "login";

////////////////////////
/*LoginState*/
////////////////////////

/**
 * Interface for the LoginState.
 */
export interface LoginState {
  authenticatedUser : any, //The Authentication User Values from Firebase
}

/**
 * Default LoginState.
 */
export const defaultLoginState : LoginState = {
  authenticatedUser : null,
}

/**
 * Cached LoginState Information.
 */
export var cacheLoginState : LoginState = Object.assign([], defaultLoginState);

/**
 * Context Creation for the LoginState.
 */
const LoginStateContext = React.createContext<LoginState>(cacheLoginState);

////////////////////////
/*Capacitor Storage for Settings*/
////////////////////////

/**
 * Saves Firebase Authentication value to storage.
 * @param s current settings to save
 */
export async function saveLogin(s : LoginState) : Promise<boolean> {
  /*Save the Settings into Capacitor Storage*/
  const returnValue = await Storage.set({
    key: storageKey,
    value: JSON.stringify(s)
  }).then( () => {
    return true;
  }).catch(err => {
    console.log(err);
    return false;
  });

  /*Save to Cache Storage*/
  cacheLoginState = s;

  return returnValue;
}

/**
 * Gets Firebase Authentication from storage
 * Retrieve previously saved data.
 */
export async function getLogin() : Promise<LoginState> {

  const storageReturn = await Storage.get({key: storageKey});

  if (typeof storageReturn.value === 'string') {
    let storageLogin : LoginState = JSON.parse(storageReturn.value) as LoginState;
    cacheLoginState = storageLogin;
    return storageLogin;
  } else { //Null Case
    return defaultLoginState;
  }
}

export async function logout() : Promise<boolean>{

  /*Save the Settings into Capacitor Storage*/
  const returnValue = await Storage.set({
    key: storageKey,
    value: JSON.stringify(defaultLoginState)
  }).then( () => {
    return true;
  }).catch(err => {
    console.log(err);
    return false;
  });

  /*Save to Cache Storage*/
  // cacheLoginState = Object.assign([], defaultLoginState);

  return returnValue;

}

export default LoginStateContext;

