import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useForm from '../hooks/Form';
import List from './List';
import { v4 as uuid } from 'uuid';
import { Button } from '@blueprintjs/core';
import {  Card, Elevation } from "@blueprintjs/core";
const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (


    <Card interactive={true} elevation={Elevation.TWO}>
    <div className="mainsec">
    <h2 id='h2'>To Do List: {incomplete.length} items pending </h2>

    <div className="mainCards">


    <form onSubmit={handleSubmit}>

<h2>Add To Do Item</h2>

<label>
  <span>To Do Item</span>
  <input onChange={handleChange} name="text" type="text" placeholder="Item Details"  class="bp3-input .modifier"  type="text" dir="auto" />

</label>

<label>
  <span>Assigned To</span>
  <input class="bp3-input .modifier"  type="text"  onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" dir="auto" />

</label>

<label>
  <span>Difficulty</span>

  <input  onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" class="bp3-input .modifier"  type="text"  dir="auto" />

</label>

<label>
  <Button   type="submit" rightIcon="arrow-right" intent="success" text="Add Item" />

</label>
</form>
      <List  list={list} toggleComplete={toggleComplete} />
    </div>
  </div>
  </Card>
  );
};

export default ToDo;