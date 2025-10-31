import React, { useState } from "react";
import emailjs from "emailjs-com";

const RegisterModel = ({ isOpen, onClose, eventName }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    teamName: "",
    eventName: eventName || "",
  });

  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.teamName) {
      alert("Please fill all fields.");
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_KEY, 
        import.meta.env.VITE_TEMPLATE_KEY, 
        {
          from_name: formData.fullName,
          from_email: formData.email,
          team_name: formData.teamName,
          event_name: formData.eventName,
        },
        import.meta.env.VITE_PUBLIC_API_KEY 
      )
      .then(() => {
        setMessage("Thank you for registering! We’ve received your details.");
        setFormData({
          fullName: "",
          email: "",
          teamName: "",
          eventName,
        });
      })
      .catch((error) => {
        console.error(error);
        setMessage("Something went wrong. Please try again later.");
      });
  };

  return (
    
    <div
      className="fixed inset-0 z-[9999] bg-black/50 flex justify-center items-center"
      onClick={onClose}
      style={{ pointerEvents: "auto" }} 
    >
      
      <div
        className="bg-white rounded-xl shadow-2xl p-6 w-96 relative transition-transform duration-200 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl focus:outline-none"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-center mb-4">
          Register for {eventName}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="teamName"
            placeholder="Team Name"
            value={formData.teamName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            disabled
            className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Submit
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-sm text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
};

export default RegisterModel;
