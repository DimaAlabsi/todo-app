import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { SettingssContext } from '../context/SettingContext';
import { Button } from '@blueprintjs/core';
import ReactPaginate from "react-paginate";
function List(props) {
  const settings = useContext(SettingssContext)
  const [pageNumber, setPageNumber] = useState(0);
  const usersPage = settings.numOfItems;
  const pages = pageNumber * usersPage;

  const displayUsers = props.list.slice(pages, pages + usersPage)
    .map((item) => {
      return (

        <div key={item.id} style={{ width: "650px", margin: "15px" }}>

          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>

          <Button onClick={() => props.toggleComplete(item.id)}>
            Complete: {item.complete.toString()}</Button>
            <Button  onClick={() => props.deleteItem(item.id)} type="submit"  intent="danger" text="delete" />

        </div>
      );
    });
  const pageCount = Math.ceil(props.list.length / usersPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>


      {displayUsers}
      <ReactPaginate

        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
}

export default List;
