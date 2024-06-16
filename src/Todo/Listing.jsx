import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import "../App.css"
const Listing = ({ data, deleteItem, editItem, showComplete }) => {
  return (
    <ul class="">
      {data.map((x, index) => (
        <li key={index} className="w-100 d-flex justify-content-between" style={{ borderRight: x.isCompleted ? `10px solid blue` : `` }}>
        <div className="d-flex flex-column w-100 mb-4 border border-primary p-2 rounded-3">

        <label htmlFor="title">Title : <b id="title">{x.name}</b></label> <hr className="m-0"/>


        <label htmlFor="description"> Description :<span className="font-italic" id="description">{x.description}</span> </label>

        <label htmlFor="isCompleted"> isCompleted :<span id="isCompleted">{x.isCompleted ? "Completed" : "Pending"}</span></label> 

        </div>
          <div className="w-50 p-2 m-2 rounded-3">
            <button className="btn btn-danger p-2 m-2" onClick={() => deleteItem(x.id)}><MdDelete/> Delete</button>
            <button className="btn btn-primary p-2" onClick={() => editItem(x.id)}> <BiEdit/>Edit</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Listing;
