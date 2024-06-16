import { useState, useEffect } from "react";
import { initArray } from "./data";
import Listing from "./Listing";
import Form from "./Form";

const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setisCompleted] = useState(false);

  const [selectId, setSelectId] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);

  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem("listitem");
    return savedList ? JSON.parse(savedList) : initArray;
  });

  useEffect(() => {
    localStorage.setItem("listitem", JSON.stringify(list));
  }, [list]);

  const addItem = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Please Add Value ..");
    } else {
      let lastItem = list.length ? list[list.length - 1].id : 0;
      let arr = [...list, { id: ++lastItem, name, description, isCompleted }];
      setList(arr);
      resetForm();
    }
  };

  const deleteItem = (ID) => {
    setList(list.filter((x) => x.id !== ID));
  };

  const editItem = (ID) => {
    setSelectId(ID);
    const selectedObject = list.find((x) => x.id === ID);
    setName(selectedObject.name);
    setDescription(selectedObject.description);
    setisCompleted(selectedObject.isCompleted);
  };

  const update = (e) => {
    e.preventDefault();
    setList(list.map((x) => (x.id === selectId ? { ...x, name, description, isCompleted } : x)));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setisCompleted(false);
    setSelectId(null);
  };

  return (
    <div className="mt-4 m-5">
      <Form
        name={name}
        description={description}
        isCompleted={isCompleted}
        submit={selectId ? update : addItem}
        setName={setName}
        setDescription={setDescription}
        setisCompleted={setisCompleted}
      />

      <Listing data={list} deleteItem={deleteItem} editItem={editItem} showComplete={showCompleted} />
      <h2 className="m-2 mt-5 text-center">Todo List Advance / Muhammad Sumair</h2>
    </div>
  );
};

export default App;
