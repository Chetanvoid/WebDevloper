import React from "react";

const Form = (props) => {
  return (
    <div>
      <input type="text" name="notes" onChange={props.onChangeHandler}/>
      <button onClick={props.onAddHandler}>Add</button>
    </div>
  );
};

export default Form;
