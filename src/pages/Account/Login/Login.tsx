import React from 'react';
import { FirebaseContext } from '../../../firebase';
import LoginForm from './LoginPage';

const Login = () => {

  return (
    
    <div>

      <FirebaseContext.Consumer>
        {firebase => <LoginForm firebase={firebase}/>}
      </FirebaseContext.Consumer>

    </div>
  );
}

export default Login;