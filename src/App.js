import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from './components/Mail/Mail';
import EmailList from './components/Mail/EmailList';
import SendMail from './components/SendMail/SendMail';
import { useSelector, useDispatch } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from "./components/LoginPage/Login";
import { auth } from './firebase';
import { onAuthStateChanged } from '@firebase/auth';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen); 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        // if User is signed in let him access his gmail 
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          })
        );
      }
    });    
   }, []);

  return (                                      /* press Ctrl + Spacebar at the end of ur component to get the import statement*/
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar /> 
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>

      {sendMessageIsOpen && <SendMail />}
    </div>
      )}
    </Router>
 
  );
}

export default App;




// npm install -g firebase-tools