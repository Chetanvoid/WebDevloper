import React from "react";

class Name extends React.Component{

    constructor(){
        super();

        this.state={
            FirstName:""
           
        };
    }

    render(){

        const forceUpdate = (e)=>{
            this.setState({
                FirstName:e.target.value
            });
        };
     

        const addtodolist=(e)=>{
            e.preventDefault();
            this.props.addtodo(this.state.FirstName);
        }
        
       
 return(

  <form onSubmit={addtodolist}>
     <input placeholder="Firestname" value={this.state.FirstName} onChange={forceUpdate} />

     <button type="sumbit">Add Item</button>
    </form>
   );
  }
}

export default Name;