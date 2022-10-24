const Form = (props) => {

    return (<div>
        <form>

            <div className="form-group">
                <label>Title</label>
                <input type="text" value={props.title} onChange={props.onChangeHandler}  
                className="form-control" name="title" />
            </div>


            <div className="form-group">
                <label>Amount</label>
                <input type="text" value={props.amount} onChange={props.onChangeHandler} 
                className="form-control" name="amount" />
            </div>


            <div className="form-group">
                <label>Duration</label>
                <input type="text" value={props.duration} onChange={props.onChangeHandler} 
                className="form-control" name="duration" />
            </div>


            {props.getEditStatus?<button onClick={props.onEditFinalSubmitHandler} type="submit" 
            className="btn btn-primary">Edit</button>:<button onClick={props.onSubmitHandler} type="submit"
             className="btn btn-primary">Submit</button>}

        </form>
    </div>)
}
export default Form;