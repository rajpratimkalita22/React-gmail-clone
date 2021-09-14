import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 
"react-router-dom";

function App() {
  return (                                      /* press Ctrl + Spacebar at the end of ur component to get the import statement*/
    <Router>
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar /> 
      </div>
    </div>
    </Router>
 
  );
}

export default App;
