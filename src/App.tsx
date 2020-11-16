////////////////////////////////////////////////////////////////////////////////////
/* React Imports */
////////////////////////////////////////////////////////////////////////////////////

import React from 'react';

////////////////////////////////////////////////////////////////////////////////////
/* Ionic Imports */
////////////////////////////////////////////////////////////////////////////////////

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

////////////////////////////////////////////////////////////////////////////////////
/* Custom Imports */
////////////////////////////////////////////////////////////////////////////////////

import Main from './main/Main';
import Firebase, { FirebaseContext } from './firebase';
import LoginStateContext, { defaultLoginState } from './state/LoginState';

////////////////////////////////////////////////////////////////////////////////////
/* App */
////////////////////////////////////////////////////////////////////////////////////

/**
 * App Component.
 * This contains only the Overall Context Providers 
 */
const App: React.FC = () => {

  ////////////////////////////
  /*Return*/
  ////////////////////////////
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <LoginStateContext.Provider value={defaultLoginState}>
        <Main/>
      </LoginStateContext.Provider>
    </FirebaseContext.Provider>
  )
};

export default App;
