import React from "react"

class Counter extends React.Component{
    // constructor(){
    //     super();
    
    //     this.state={
    //       counter:0
    //     };
    //   }
    // increment =()=>{
    //     this.setState({
    //       counter:this.state.counter+1,
    //     });
    //   };
    

    render(){
        return(
            <div>
                <h1>{this.props.CurrentCounter}</h1>
               <button onClick={this.props.Incrementcounter}>Increment</button>          
            </div>
        );
    }
}

export default Counter;