import React, { useState } from "react";

const MessageBox = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus({ message: "Message sent successfully!", type: "success" });
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus({ message: "Error sending message. Please try again.", type: "error" });
    }
  };

  return (
    <section className="w-full bg-white flex justify-center p-2 ">
      <div className="w-full max-w-md bg-gray-100 shadow-lg rounded-lg p-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Contact Me</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Message Textarea */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p
            className={`text-center mt-3 text-sm font-semibold ${
              status.type === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default MessageBox;



// import React, { useState } from "react";

// const MessageBox = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       setStatus({ message: "Message sent successfully!", type: "success" });
//       setFormData({ name: "", email: "", message: "" });
//     } else {
//       setStatus({ message: "Error sending message. Please try again.", type: "error" });
//     }
//   };

//   return (
//     <section className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Me</h2>
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name Input */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
//           />

//           {/* Email Input */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
//           />

//           {/* Message Textarea */}
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
//           ></textarea>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
//           >
//             Send Message
//           </button>
//         </form>

//         {/* Status Message */}
//         {status && (
//           <p
//             className={`text-center mt-4 text-lg font-semibold ${
//               status.type === "success" ? "text-green-500" : "text-red-500"
//             }`}
//           >
//             {status.message}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default MessageBox;
