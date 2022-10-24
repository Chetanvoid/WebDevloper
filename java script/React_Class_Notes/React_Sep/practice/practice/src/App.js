import React, { useState } from "react";
import List from "./List/List";
import Form from "./Form/Form";

function App() {
  const [gettext, settext] = useState("");
  const [getlist, setlist] = useState([]);


  const onChangeHandler = (event) => {
    settext(event.target.value);
  };


  const onAddHandler = (event) => {
    setlist([...getlist, gettext]);
    settext("");
  };


  const onDeleteHandler = (index) => {
    let list = getlist;
    list.splice(index, 1);
    setlist([...list]);
  };


  return (
    <div>
      <Form
        value={gettext}
        onChangeHandler={onChangeHandler}
        onAddHandler={onAddHandler}
      />
      <List list={getlist} onDeleteHandler={onDeleteHandler} />
    </div>
  );
}

export default App;
