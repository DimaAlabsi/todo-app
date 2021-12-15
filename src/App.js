import React, { useContext } from 'react';
import SettingContext from './context/SettingContext';
import Header from './components/Header';
import ToDo from './components/Todo';
import Footer from './components/Footer';
import './App.scss';

import Login from './components/Login';
// import LoginContext from './context/loginContext';
import {LoginContext} from './context/loginContext';
import {If, Then, Else} from 'react-if';
import Signup from './components/Signup';

export default function App(props) {

  const  context  = useContext(LoginContext);
 
    return (
      <>
            {/* <ToDo /> */}

        {/* <LoginContext>
        <Header/>
        <Login/>
          <SettingContext>
           
           
         

          </SettingContext>
          <Footer/>
        </LoginContext> */}

<If condition={context.loggedIn==true}>
            {console.log(context)}
            <Then>
            <SettingContext>
     
        <Header/>
            <ToDo />
          
         <Footer/>  
        
        <SettingContext/>

   
     
      </SettingContext>

            </Then>
            <Else>
             

            <Login/>
          
           
              <Signup/>
      
           
            </Else>
            
          </If>
      





      </>

    );

  }
