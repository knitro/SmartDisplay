import React from 'react';
import { FirebaseContext } from '../../../firebase';
import RegisterPage from './RegisterPage';

const Register: React.FC = () => {

  ////////////////////////////
  /*Return*/
  ////////////////////////////

  return (
    <div>

      <FirebaseContext.Consumer>
        {firebase => <RegisterPage firebase={firebase}/>}
      </FirebaseContext.Consumer>

    </div>
  );
};

export default Register; 