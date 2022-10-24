import React from "react"
import Counter from "./compound/Counter";
import Navbar from "./compound/Nacbar";


class app extends React.Component{
  constructor(){
    super();

    this.state={
      counter:0
    };
  }
increment =()=>{
    this.setState({
      counter:this.state.counter+1,
    });
  };

   
  render(){
   
    return (
    // 
    <>
        <Counter
         CurrentCounter={this.state.counter}
         Incrementcounter={()=>{this.increment();}}
        />
        <Counter
         CurrentCounter={this.state.counter}
         Incrementcounter={()=>{this.increment();}}
        />
        <Navbar 
        NavbarCouter={this.state.counter}
        />


{/* <Counter
         CurrentCounter={this.state.counter}
         Incrementcounter={ increment}
        />
        <Counter
         CurrentCounter={this.state.counter}
         Incrementcounter={increment}
        /> */}

        
      
    </>
    

    );
  }
}

  export default app;