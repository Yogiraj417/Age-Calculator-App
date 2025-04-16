import React, { useState } from 'react';
import Home from './components/Home';
import AgeCalculator from './components/AgeCalculator';
import Contact from './components/Contact';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'age':
        return <AgeCalculator />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-8">
      <h1 className="text-3xl font-bold mt-4 mb-6 text-center text-blue-700 drop-shadow-lg">My Web App</h1>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setPage('home')}
          className={`px-4 py-2 rounded shadow transition duration-200 hover:scale-105 ${
            page === 'home' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          Login/Search
        </button>
        <button
          onClick={() => setPage('age')}
          className={`px-4 py-2 rounded shadow transition duration-200 hover:scale-105 ${
            page === 'age' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          Age Calculator
        </button>
        <button
          onClick={() => setPage('contact')}
          className={`px-4 py-2 rounded shadow transition duration-200 hover:scale-105 ${
            page === 'contact' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          Contact
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">{renderPage()}</div>
    </div>
  );
}

export default App;
