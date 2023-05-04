import { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import DisplayMessage from './DisplayMessage';

export default function LoginForm() {
    const { register, handleSubmit } = useForm();
    const [ message, setMessage ] = useState('');
    const url = process.env.REACT_APP_URL;
    const navigate = useNavigate();
    
    const onSubmit = async data => {
        try {
            const res = await axios.post(`${url}/login`, data)
            if(res.status === 200) {
                console.log(res)
                setMessage('Successfully Logged In')
                // Set the storage with a token
                sessionStorage.setItem('tokenKey', JSON.stringify(res.data.token));
                sessionStorage.setItem('user', res.data.username);
                // redirect to dashboard area
                navigate("/dashboard");
            }
            
        } catch(err) {
            console.log(err)
            if(err.code === 'ERR_NETWORK') {
                return setMessage('Please check your internet')
            }
            setMessage(err.response.data)
        }
    }
  
    return (
        <div className='login_cover'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DisplayMessage message={message} />
                <div className="mb-3">
                    <label>User Name</label>
                    <input type="text" {...register("username")} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" {...register("password")} className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <div id="emailHelp" className="form-text">
                    Not Registered, <Link to="/register">please click Register Me</Link>
                </div>
            </form>
        </div>
    );
}
