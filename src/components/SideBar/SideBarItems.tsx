import { IonContent, IonList } from '@ionic/react';
import React from 'react';
import { FirebaseContext } from '../../firebase';
import { loggedInItems, loggedOutItems, SideBarItem, sideBarItems } from './SideBarData';
import SideBarItemSingle from './SideBarItemSingle';
import uuid from 'uuid'

/**
 * Encapsulates the Rendering of all the Sidebar Items.
 */
const SideBarItems: React.FC = () => {

  return (
    <FirebaseContext.Consumer>
    {firebase =>
      <IonContent>
        <IonList>

          {/* Creates the Default SideBar Items through calling the renderMenuItem for each item in the sideBarItems array*/}
          {sideBarItems.map((currentItem: SideBarItem) => <SideBarItemSingle currentItem={currentItem} isDisabled={false} key={uuid.v4()}/>)}
          
          {console.log(firebase.auth.currentUser)}

          {(firebase.auth.currentUser !== null) 
            ? <div>
              {loggedInItems.map((currentItem: SideBarItem) => <SideBarItemSingle currentItem={currentItem} isDisabled={false} key={uuid.v4()}/>)}
              {loggedOutItems.map((currentItem: SideBarItem) => <SideBarItemSingle currentItem={currentItem} isDisabled={true} key={uuid.v4()}/>)}
            </div>
            : <div>
              {loggedInItems.map((currentItem: SideBarItem) => <SideBarItemSingle currentItem={currentItem} isDisabled={true} key={uuid.v4()}/>)}
              {loggedOutItems.map((currentItem: SideBarItem) => <SideBarItemSingle currentItem={currentItem} isDisabled={false} key={uuid.v4()}/>)}
            </div>
          } 
            
        </IonList>
      </IonContent>
    }
    </FirebaseContext.Consumer>
  )
}

export default SideBarItems;