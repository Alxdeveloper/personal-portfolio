import { useState } from 'react';
import axios from 'axios';

const ManageUsers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API request to create new member (using a placeholder endpoint)
      const response = await axios.post('http://localhost:3001/admin/members', { name, email, password });
      setSuccess('User created successfully');
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError('Failed to create user');
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Create Member Credentials</h2>
      
      {/* Success/Error Messages */}
      {success && <p className="text-green-600 mb-4">{success}</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      {/* User Creation Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            placeholder="Enter member's name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            placeholder="Enter member's email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            placeholder="Enter member's password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Create Member
        </button>
      </form>
    </div>
  );
};

export default ManageUsers;
