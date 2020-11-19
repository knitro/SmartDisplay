import React from 'react';
import { FirebaseContext } from '../../../firebase';
import ProfilePage from './ProfilePage';

const Profile: React.FC = () => {

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <FirebaseContext.Consumer>
      {firebase => <ProfilePage firebase={firebase}/>}
    </FirebaseContext.Consumer>
  );
};

export default Profile; 