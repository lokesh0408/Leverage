import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the form data to localStorage
    localStorage.setItem('userData', JSON.stringify(formData));

    // Optional: You can clear the form fields after saving data
    setFormData({
      name: '',
      email: '',
      password: '',
    });

    alert('Registration successful! Data saved in localStorage.');
    navigate('/login');
  };

  return (
    <div className="body">
    <div className='container'>
      <h1>Register!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label><br />
        <input
          type="text"
          name='name'
          className='nam'
          value={formData.name}
          onChange={handleInputChange}
        /><br />
        <label htmlFor="email">Email Address</label><br />
        <input
          type="text"
          name='email'
          className='eadd'
          value={formData.email}
          onChange={handleInputChange}
        /><br />
        <label htmlFor="password">Password</label><br />
        <input
          type="password"
          name='password'
          className='pword'
          value={formData.password}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
  );
}

export default Register;
