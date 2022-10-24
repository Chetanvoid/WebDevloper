import './FormInput.css';

const FormInput = (props)=>{
    return(<div className="form-box">
        <input type="text" value={props.value} name="notes" 
        onChange={props.onSetChangeHandler}/>

        {props.typeStatus?<button className="form-button" 
        onClick={props.onEditSubmit}>Edit</button>
        
        :<button className="form-button" onClick={props.onAddHandler}>ADD</button>} 
    </div>)
}

export default FormInput;