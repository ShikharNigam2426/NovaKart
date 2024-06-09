import React, { useState } from 'react';
import './style/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Use navigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('The full name is:', fullName);

    if (!fullName || !password || !confirmPassword) {
      alert('All fields are required!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:2000/user/signup', {
        fullName,
        password
      });
      alert('User created successfully. Redirecting to login page.');
      navigate('/signin'); // Redirect to login page
    } catch (error) {
      console.error('Error:', error);
      alert('User not created. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)} className='signUpPage d-flex flex-column justify-content-center align-items-center'>
        <div className="SignUpBox d-flex flex-column">
          <h1 className='heading mx-auto py-3'>Sign up</h1>
          <label htmlFor="" className='Label'>Full name</label>
          <input className='inputField mx-auto my-2' type="text" onChange={(e) => { setFullName(e.target.value) }} placeholder='Enter your name' />

          <label htmlFor="" className='Label'>Password</label>
          <input className='inputField mx-auto my-2' type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter your Password' />

          <label htmlFor="" className='Label'>Confirm Password</label>
          <input className='inputField mx-auto my-2' type="password" onChange={(e) => { setConfirmPassword(e.target.value) }} placeholder='Re-Enter your Password' />

          <Link to='/signin'>
            <a href="/">Already have an account?</a>
          </Link>

          <button className='btn btn-primary mx-auto signUpButton my-4' action='submit'>Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
