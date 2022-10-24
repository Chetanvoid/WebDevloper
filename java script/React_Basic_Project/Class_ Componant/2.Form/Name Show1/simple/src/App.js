import React from "react";
import Name from "./componant/Name";
import NameList from "./componant/NameList";
import {v4 as uuid} from "uuid";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      todos:[]
    }
  }

  render(){
   const addTodo = (value)=>{
    const NewTodo = {
      id:uuid(),
      competed:false,
      title:value
    };
  
   };
  
   const updatearray = [...this.state.todos, NewTodo];
   this.setState({
    todos:updatearray
   })
   const deletetodo  = (todoID)=>{
          const updatearray=this.state.todos.filter(
            (todos)=> todoID.id!==todoID
          );
         this.setState({
          todos:updatearray
         });
   };


    return(
      <>
  
      <Name addtodo={addTodo}/>
      < NameList todos={this.state.todos} deletetodo={deletetodo}/>

      </>
    );
  }
}
export default App;