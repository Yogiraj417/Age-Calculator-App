import React from 'react';

const Home = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Login / Search Page</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Username:</label>
          <input type="text" className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password:</label>
          <input type="password" className="w-full px-3 py-2 border rounded" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Home;
