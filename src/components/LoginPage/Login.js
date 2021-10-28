import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from "../../firebase";
import { signInWithPopup } from '@firebase/auth';
import "./Login.css";
import { login } from '../../features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();

  const SignIn = () => {
    signInWithPopup(auth, provider)
      .then(({user}) => {
          dispatch(
            login({
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL,
            })
          );
      })
      .catch((error) => alert(error.message));
  };
  
  
  return (
        <div className='login'>
          <div className="login__container">
            <img src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo-500x281.png" alt=""/>
            <Button variant="contained" color="primary" onClick={SignIn}>Login</Button>
          </div>  
        </div>
    );
}

export default Login;
