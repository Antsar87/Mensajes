import React from 'react';
import firebase from 'firebase';
import { auth } from '../Firebase';
import { Button } from '@material-ui/core';

function SignIn() {
  const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    provider.setCustomParameters({ prompt: 'select_account' });
    
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <Button onClick={SignInWithGoogle}>Sign in with google</Button>
    </div>
  );
}

export default SignIn;
