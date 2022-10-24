import { Component } from 'react';
import './Table.css';



class Table extends Component {

    constructor(props) {
        super(props);
        //to acccess any data from parent component we need to use pre-defined keyword called props
        console.log(this.props.list);
        // this.state={
        //     check:"";
        // }
    }

    // static getDerivedStateFromProps(props,state){
    //     return {
    //         check:props.list   
    //     };
    // }

    // getSnapshotBeforeUpdate(prevProps,PrevState){
    //     console.log(prevProps,prevState);
    // }

    // componentDidUpdate(){
    //      console.log("component didupdate");
    // }

    render() {
        return (<>
            <div className="marginTable container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((obj, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{obj.product}</td>
                                    <td>{obj.amount}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </>)
    }
}

export default Table;




// =================================================================================


        // For  getDerivedStateFromProps( mainy use like parent send props and 
            // first you can define your seprate state and then used)

       
      //componentDidUpdate


// constructor(props) {
//     super(props);
//     //to acccess any data from parent component we need to use pre-defined keyword called props
//     // console.log(this.props.list);
//     this.state={
//         check:'',

//         flag:false
//     }
// }




// static getDerivedStateFromProps(props,state){
//     return {
//         check:props.list
//     };
// }


// onChangeHandler=()=>{
//     this.setState({
//         flag:!this.state.flag
//     })
// }




// componentDidUpdate(){
//     console.log("component did update");
// }




// render() {
//     return (<>
//         <div className="marginTable container">
//            <button onClick={this.onChangeHandler}>Submit Flag</button>
//            {this.state.flag && <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th scope="col">#</th>
//                         <th scope="col">Product Name</th>
//                         <th scope="col">Product Amount</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.state.check.map((obj, index) => {
//                         return (
//                             <tr key={index}>
//                                 <th scope="row">{index + 1}</th>
//                                 <td>{obj.product}</td>
//                                 <td>{obj.amount}</td>
//                             </tr>
//                         )
//                     })}

//                 </tbody>
//             </table>} 
//         </div>
//     </>)
// }



// ========================================================================



// Use for previous state check before update(here for flag reminder)

// getSnapshotBeforeUpdate(PrevProps,PrevState){
//     console.log("prevState",PrevState);
// }



// ================================================
                            // componantdidunmount 
// componentWillUnmount(){
//     console.log("componentwillunmount");
//     alert("componentUnMount")
//   }