// import app from 'firebase/'
import app from 'firebase/app'
import 'firebase/database';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

class Firebase {

  ////////////////////////////
  /*Fields*/
  ////////////////////////////
  
  auth : app.auth.Auth;
  db: app.database.Database;

  ////////////////////////////
  /*Constructor*/
  ////////////////////////////

  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }

    this.auth = app.auth();
    this.db = app.database();
  }

  ////////////////////////////
  /*Creating Accounts*/
  ////////////////////////////

  /**
   * Creating an Account using Email and Password.
   * @param email - the string of their email
   * @param password - the password for their account
   */
  doCreateUserWithEmailAndPassword = async (email : string, password : string) => {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser;
  }

  ////////////////////////////
  /*Signing In*/
  ////////////////////////////
  
  /**
   * Signing in with Email and Password.
   * @param email - the string of their email
   * @param password - the password for their account
   */
  doSignInWithEmailAndPassword = async (email : string, password : string) => {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  ////////////////////////////
  /*Misc Functions*/
  ////////////////////////////

  doSignOut = async () => {
    this.auth.signOut();
  }

  doPasswordReset = async (email : string) =>  {
    this.auth.sendPasswordResetEmail(email);
  }
 
  doPasswordUpdate = async (password : string) => {
    if (this.auth.currentUser !== null) {
      this.auth.currentUser.updatePassword(password);
    } else {
      //Attempted to Change password when the current user was not selected/logged in
    }
  }

  user = (uid : any) => {
    return this.db.ref(`users/${uid}`);
  }

}

export default Firebase;