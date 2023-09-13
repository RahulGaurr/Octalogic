
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: ''
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Store data in localStorage (you might want to add validation and error handling)
    localStorage.setItem('user', JSON.stringify(formData));
    navigate("/signin")
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="mb-4">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

