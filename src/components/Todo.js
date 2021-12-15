import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useForm from '../hooks/Form';
import List from './List';
import { v4 as uuid } from 'uuid';
import { Button, FormGroup } from '@blueprintjs/core';
import { Card, Elevation } from "@blueprintjs/core";
import superagent, { saveCookies } from "superagent";
import cookie from "react-cookies";
// import Auth from './Auth';
import Setting from './Setting';
const ToDo = (props) => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  const API = "https://dimaalabsiauth-api.herokuapp.com";

  // function addItem(item) {
  //   item.id = uuid();
  //   item.complete = false;
  //   setList([...list, item]);
  // }

  async function addItem(item) {
    const token = cookie.load("token");
    let respone = await superagent
      .post(`${API}/todo`, item)
      .set("authorization", `Bearer ${token}`);
   
  }
  async function deleteItem(id) {
    const token = cookie.load("token");
    await superagent.delete(`${API}/todo?index=${id}`).set('authorization', `Bearer ${token}`)
   
  }
  async function toggleComplete(id) {
  
    const token = cookie.load("token");
     let items=await props.list.map((item,index)=>{
         if(id===index){
           if(item.complete==='complete'){
             item.complete='pending'
           }else{
             item.complete='complete'
           }
           return item
         }
         
     })
     let obj={
       toDo: items[id].toDo,
       assignee: items[id].assignee,
       difficulty: items[id].difficulty,
       complete:items[id].complete
     }
    
     let respone = await superagent.put(`${API}/todo?index=${id}`,obj).set('authorization', `Bearer ${token}`)
     
     props.setList(respone.body.todo)
 
   
   }

   useEffect(async () => {
    const token = cookie.load("token");
    let respone = await superagent.get(`${API}/todo`).set('authorization', `Bearer ${token}`)
    
    props.setList(respone.body.todo)
    

  },[props.list])
 

  return (

<>
    <Card interactive={true} elevation={Elevation.TWO}>
      <div className="mainsec">
      <h1>To Do List  ({incomplete})</h1>

        <div className="mainCards">


          <form onSubmit={handleSubmit}>

            <h2>Add To Do Item</h2>

            <label>
              <span>To Do Item</span>
              <input onChange={handleChange} name="text" type="text" placeholder="Item Details" class="bp3-input .modifier" type="text" dir="auto" />

            </label>

            <label>
              <span>Assigned To</span>
              <input class="bp3-input .modifier" type="text" onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" dir="auto" />

            </label>

            <label>
              <span>Difficulty</span>

              <input onChange={handleChange} defaultValue={3} type="range" min={1}
                max={5}
                name="difficulty"
                dir="auto"
              />
            </label>

            <label>
              <Button data-testid="button-test" type="submit" rightIcon="arrow-right" intent="success" text="Add Item" />

            </label>
          </form>

          <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />
        </div>
      </div>
    </Card>
    <Setting/>
    </>
  )
};

export default ToDo;