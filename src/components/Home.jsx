import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center">GitHub User Search</h2>

      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          className="border rounded p-2 w-64 focus:outline-none"
          placeholder="Enter GitHub username"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Link to={searchQuery ? `/${searchQuery}` : '/'}>
          <button
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={!searchQuery}
          >
            Search
          </button>
        </Link>
      </div>

      <p className="text-center text-gray-700">
        This is a simple application that allows you to search for GitHub users and explore their repositories
        and followers.
      </p>
    </div>
  );
};

export default Home;
