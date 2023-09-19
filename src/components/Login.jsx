// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ history }) => {

    
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://achievexsolutions.com/eatiano_backend/public/index.php/api/auth/login', formData);
      // Assuming your backend returns a token upon successful login
      const token = response.data.token;
      // Store the token in localStorage or a secure storage method
      localStorage.setItem('token', token);
      // Redirect to a protected page or home page
      window.location.href = '/dashboard'
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
        <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
        <div className='py-24 px-10'>
      <h2 className='text-2xl font-semibold mb-2 text-center'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div  className="mb-4">
          <label htmlFor="email">email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Login;
