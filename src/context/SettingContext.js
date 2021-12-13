import React from 'react';
export const SettingssContext=React.createContext();
import { useState } from 'react';
import { useEffect } from 'react';
 function SettingContext(props) {

const [display,setDisplay]=useState(false)
const [numOfItems,setNumOfItems]=useState(2)
const [defaultSort,setDefaultSort]=useState('you have to do this')
const state ={
display ,
numOfItems,
defaultSort,
setDisplay,
setNumOfItems,
setDefaultSort
}
useEffect(()=>{
let stringArray =localStorage.getItem('SettingForm');
let objectArray= JSON.parse(stringArray);

if(objectArray){
    setNumOfItems(Number(objectArray.numberOfItem))
}
localStorage.clear()
},[])

    return (
        <>
          <SettingssContext.Provider value={state}>
          {props.children}
          </SettingssContext.Provider>  
        </>
    )
}

export default SettingContext;

