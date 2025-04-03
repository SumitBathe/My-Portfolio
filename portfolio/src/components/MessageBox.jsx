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

//     const response = await fetch("https://formspree.io/f/meoarjnp", {
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
//     <section className="w-full bg-white flex justify-center p-2 ">
//       <div className="w-full max-w-md bg-gray-100 shadow-lg rounded-lg p-4">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Contact Me</h2>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name Input */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />

//           {/* Email Input */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />

//           {/* Message Textarea */}
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           ></textarea>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Send Message
//           </button>
//         </form>

//         {/* Status Message */}
//         {status && (
//           <p
//             className={`text-center mt-3 text-sm font-semibold ${
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

//whatsapp try

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const MessageBox = () => {
  const [message, setMessage] = useState("");

  const sendWhatsAppMessage = () => {
    const phoneNumber = "918530229841"; 
    const encodedMessage = encodeURIComponent(message || "Hello Sumit, I visited your portfolio and would like to connect!");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // const whatsappURL = isMobile 
    //   ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`  // Opens WhatsApp app on mobile
    //   : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;  // Opens WhatsApp Web


    window.open(whatsappURL, "_blank"); 
  };

  return (
    <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
      <textarea
        className="w-full p-2 rounded-md text-black dark:text-white bg-white dark:bg-gray-700 border border-gray-400 dark:border-gray-600"
        rows="3"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        onClick={sendWhatsAppMessage}
        className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
      >
        <FaWhatsapp size={20} />
        Send via WhatsApp
      </button>
    </div>
  );
};

export default MessageBox;

