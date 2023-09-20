import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (!storedUserData) {
      setError('User data not found. Please register first.');
      return;
    }

    const { email, password } = storedUserData;

    if (formData.email === email && formData.password === password) {
      // Successful login logic (you can add further actions here)
      alert('Login successful!');
      setError('');
      navigate('/list'); // Clear any previous error messages

      // Clear the form fields by resetting the formData state
      setFormData({ email: '', password: '' });
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="body">
    <div className='container'>
      <h1>Login!</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
    </div>
  );
};

export default Login;
