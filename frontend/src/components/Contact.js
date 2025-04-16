import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name:</label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border rounded"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message:</label>
          <textarea
            name="message"
            className="w-full px-3 py-2 border rounded"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
