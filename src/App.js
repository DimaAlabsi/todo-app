import React from 'react';
import SettingContext from './context/SettingContext';
import Header from './components/Header';
import ToDo from './components/Todo';
import Footer from './components/Footer';
import './App.scss';
import Setting from './components/Setting';
import Login from './components/Login';
import LoginContext from './context/loginContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <>

        <LoginContext>
        <Login/>
          <SettingContext>
            <Header/>
            <ToDo />
            <Footer/>
         

          </SettingContext>
          
        </LoginContext>






      </>

    );

  }
}