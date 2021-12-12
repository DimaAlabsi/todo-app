import React from 'react';
import SettingssContext from './context/SettingContext';
import Header from './components/Header';
import ToDo from './components/Todo';
import Footer from './components/Footer';
import './App.scss'
export default class App extends React.Component {
  render() {
    return (
        <>
        <SettingssContext>
        <Header/>
      <ToDo />
      <Footer/>
      </SettingssContext>
      </>
    );
  }
}