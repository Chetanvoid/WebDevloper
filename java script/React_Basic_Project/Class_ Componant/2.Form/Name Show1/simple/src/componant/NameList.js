import React from "react";

class NameList extends React.Component{
    render(){
        return(
    <>
    <ul>
    {this.props.todos.map((todo)=>{
        <li key ={todo.id}>{todo.title}
        <button onClick={()=>{this.props.deletetodo(todo.id);}}>Delete</button></li>
    
    })}
    </ul>
    </>
        );
    }
}

export default NameList;