////////////////////////////////////////////////////////////////////////////////////
/* Standard Imports */
////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

////////////////////////////////////////////////////////////////////////////////////
/* Page Imports */
////////////////////////////////////////////////////////////////////////////////////

import Calendar_Default from '../pages/Default/Calendar/Calendar_Default';
import CurrentEvents_Default from '../pages/Default/CurrentEvents/CurrentEvents_Default';
import Notes_Default from '../pages/Default/Notes/Notes_Default';
import ShoppingList_Default from '../pages/Default/ShoppingList/ShoppingList_Default';
import Time_Default from '../pages/Default/Time/Time_Default';
import TodoList_Default from '../pages/Default/TodoList/TodoList_Default';

////////////////////////////////////////////////////////////////////////////////////
/* Component Imports */
////////////////////////////////////////////////////////////////////////////////////

import SideBar from '../components/SideBar/SideBar';
import Settings from '../pages/Settings/Settings';
import Profile from '../pages/Account/Profile/Profile';
import Login from '../pages/Account/Login/Login';
import Register from '../pages/Account/Register/Register';
import History from '../logic/History';

/**
 * Main React App
 */
const Main: React.FC = () => {

  ////////////////////////////
  /*Return*/
  ////////////////////////////
  return (
    <IonApp>
      <IonReactRouter history={History}>

        <IonSplitPane contentId="main"> {/* Adds/Allows the SideBar Functionality */}

          <SideBar/>  {/* The Actual Sidebar */}

          <IonPage id="main"> {/* ID reference allowing for Sidebar Functionality */}

            <IonRouterOutlet>

              {/*Default Pages*/}
              <Route path="/calendar"       component={Calendar_Default}      exact={true} />
              <Route path="/currentEvents"  component={CurrentEvents_Default} exact={true} />
              <Route path="/notes"          component={Notes_Default}         exact={true} />
              <Route path="/shoppingList"   component={ShoppingList_Default}  exact={true} />
              <Route path="/time"           component={Time_Default}          exact={true} />
              <Route path="/todoList"       component={TodoList_Default}      exact={true} />
              <Route path="/settings"       component={Settings}              exact={true} />

              {/*Logged In Pages*/}
              <Route path="/myProfile"      component={Profile}               exact={true} />

              {/*Logged Out Pages*/}
              <Route path="/login"          component={Login}                 exact={true} />
              <Route path="/register"       component={Register}              exact={true} />

              {/*Blank Route*/}
              <Route path="/" render={() => <Redirect to="/time" />}          exact={true} />

            </IonRouterOutlet>

          </IonPage>

        </IonSplitPane>

      </IonReactRouter>
    </IonApp>
  )
};

export default Main;
