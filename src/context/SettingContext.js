import React from 'react';
export const SettingssContext=React.createContext();

 function SettingContext(props) {
    const state={
show:false,
sort:'To Do',
itemsPerPage: 3,
    }
    return (
        <>
          <SettingssContext.Provider value={state}>
          {props.children}
          </SettingssContext.Provider>  
        </>
    )
}

export default SettingContext;

