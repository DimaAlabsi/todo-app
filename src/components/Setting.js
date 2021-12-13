import React from 'react'
import {  Card, Elevation } from "@blueprintjs/core";
function SettingForm() {
    const handleChange=e=>{
        e.preventDefault();
      
        let numberOfItem=e.target.value
        
        let obj ={
          
            numberOfItem:numberOfItem
        }
        setItem (obj)
 
    }
 
     
             
function setItem (obj){
    localStorage.setItem('SettingForm', JSON.stringify(obj));
}
    return (
        <div>
            <div className="toDo">
          <Card interactive={true} elevation={Elevation.TWO}>
          <form>
        <label>Num of Items  </label>
        <input type="text" onChange={handleChange} />
      </form>
          </Card>
        </div>
        </div>
    )
}

export default SettingForm