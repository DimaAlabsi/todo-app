import React from 'react';
import SettingContext from './context/SettingContext';
import Header from './components/Header';
import ToDo from './components/Todo';
import Footer from './components/Footer';
import './App.scss';
import Setting from './components/Setting';
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
         <Router>
        <Switch>
        <SettingContext>
        <Route exact path="/todo-app">
        <Header/>
      <ToDo />
    
      <Footer/>
      </Route> 
      <Route path="/form">
         <Header/>
            <Setting/>
            <Footer/>
         </Route>
      </SettingContext>
      </Switch>
      </Router>
      </>
    );
  }
}