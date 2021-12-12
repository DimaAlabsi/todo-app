import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import{SettingssContext} from '../context/SettingContext';
import { Button } from '@blueprintjs/core';
function List(props) {
  const settings = useContext(SettingssContext)
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = settings.numOfItems;
    const pagesVisited = pageNumber * usersPerPage;
  
      const changePage = ({ selected }) => {
        setPageNumber(selected);
      };
    return (
      <>
 
 {props.list.map((item) => {
        return (
<>
<div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
         
          <Button icon="refresh" onClick={() => props.toggleComplete(item.id)}> Complete: {item.complete.toString()} </Button>

            <hr></hr>
          </div>
          </>
        );
      })}
      </>
    );
  }
  
  export default List;