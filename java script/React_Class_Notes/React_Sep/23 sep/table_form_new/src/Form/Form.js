import { useState } from "react";

const Form = (props) => {
    const [getForm,setForm]=useState({
        title:'',
        amount:0,
        duration:0
     });
    
     const onChangeHandler=(event)=>{
        setForm({
            ...getForm,
           [event.target.name]:event.target.value
        })
     }
     const onSubmitHandler=(event)=>{
        event.preventDefault();
        props.onSubmitHandler(getForm);
    }
    
    return (<div>
        <form>
            <div className="form-group">
                <label>Title</label>
                <input type="text" onChange={onChangeHandler}  className="form-control" name="title" />
            </div>
            <div className="form-group">
                <label>Amount</label>
                <input type="text"  onChange={onChangeHandler} className="form-control" name="amount" />
            </div>
            <div className="form-group">
                <label>Duration</label>
                <input type="text"  onChange={onChangeHandler} className="form-control" name="duration" />
            </div>
            <button onClick={onSubmitHandler} type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>)
}
export default Form;