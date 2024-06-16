import React from "react";

const Form = ({ name, description, isCompleted, submit, setName, setDescription, setisCompleted }) => {
  return (
    <form onSubmit={submit} style={{height: "100px"}} className="p-3 border rounded-4 d-flex align-items-center gap-2 mb-4">
      <input style={ {background:"transparent"}} className="text-primary p-2 fs-4 border border-primary rounded-4" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your title " />
      <textarea  style={{height: "58px" , background:"transparent"}} className=" text-primary fs-5 p-2 w-25 rounded-4  border border-primary " value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Your description" />
     <div className="m-3 fs-5 text-primary text-bold"> 
      <input className="m-1" id="checkbox" type="checkbox" checked={isCompleted} onChange={(e) => setisCompleted(e.target.checked)} /> 
      <label htmlFor="checkbox">isCompleted </label>
    </div>

      <button className="btn btn-primary p-2 fs-5 w-25">Add List</button>
    </form>
  );
};

export default Form;
