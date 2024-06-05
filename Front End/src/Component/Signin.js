import React, { useState } from 'react'
import './style/Signin.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:2000/user/login', {loginName, password});
            if(response.status !== 200){
                throw new Error('User Does not Exist or password may be Wrong');
            }
            console.log(response.data);
            navigate('/');
        } catch (error) {
            alert('User does not exist, First Create a user')
            navigate('/signup');
        }
    }
    return (
        <div>
            <form onSubmit={(e) => {handleSubmit(e)}} className='signUpPage d-flex flex-column justify-content-center align-items-center'>
                <div className="SignInBox d-flex flex-column">

                    <h1 className='heading mx-auto py-3'>Sign In</h1>
                    <label htmlFor="" className='Label'>Username</label>
                    <input className='inputField mx-auto my-2' type="text" placeholder='Enter your name' onChange={(e) => { setLoginName(e.target.value)}
                } />

                    <label htmlFor="" className='Label'>Password</label>
                    <input className='inputField mx-auto my-2' type="password" placeholder='Enter your Password' onChange={(e) => { setPassword(e.target.value)}
                } />

                    <Link to='/signup'>
                        <a href="/">Don't have an account?</a>
                    </Link>

                    <button className='btn btn-primary mx-auto signUpButton mt-4 mb-2' action='submit'>Sign In</button>
                    <Link to='/'>
                        <button type="submit" class="btn btn-success signUpButton">Home</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignIn;