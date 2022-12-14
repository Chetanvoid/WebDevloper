// import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { loginSuccess } from '../redux/authencation';

const Login = (props) => {

    const navigation = useNavigate();
    const dispatch = useDispatch();
    const {email,password} = useSelector((state)=>state.authentication);
    const [getForm,setForm] = useState({
        email:'',
        password:''
    });

    const onChangeHandler=(event)=>{
       setForm({
        ...getForm,
        [event.target.name]:event.target.value
       })
    }
    //step2: do the instantiation for using useNavigation
 



    const onSubmitHandler=(event)=>{
        event.preventDefault();
        if(getForm.email === email && getForm.password == password){
            dispatch(loginSuccess());
            navigation('product');   
        }
        else{
            alert("Invalid credentials");
        }
        
    }
    

    return (<>
  
    <div className="container">
        <div className="row">
            <div className="col-4">
            </div>
            <div className="col-4">
                <form>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" onChange={onChangeHandler} class="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" onChange={onChangeHandler} class="form-control" name="password" placeholder="Password" />
                    </div>
                    <button  onClick={onSubmitHandler} type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
            <div className="col-4">

            </div>
        </div>

    </div>
    </>)
}

export default Login;