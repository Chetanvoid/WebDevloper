import React from "react";

const List = (props) => {
  return (
    <div>
      <ul>
        {props.list.map((obj, index) => {
          return (
            <div key={index}>
              <li>{obj}</li>
              <button onClick={() => props.onDeleteHandler(index)}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
