import React from "react"



class app extends React.Component{
  constructor(){
    super();

    this.state={
      counter:0

    }
  }



 

  render(){
    
    return (
    // 
    <>
        <h1>{this.state.counter}</h1>
        <button onClick={ ()=>{
      this.setState({
        counter:this.state.counter+1,
      
      });}}>Increment</button>
      
    </>
    

    );
  }
}

  export default app;