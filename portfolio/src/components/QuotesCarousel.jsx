// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const quotes = [
//   "The only way to do great work is to love what you do.",
//   "Success is not final, failure is not fatal: it is the courage to continue that counts.",
//   "Code is like humor. When you have to explain it, it’s bad.",
//   "Simplicity is the soul of efficiency."
// ];

// const QuotesCarousel = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-40 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
//       <AnimatePresence mode="wait">
//         <motion.p
//           key={index}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.5 }}
//           className="text-lg font-semibold text-center text-gray-900 dark:text-gray-100"
//         >
//           {quotes[index]}
//         </motion.p>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default QuotesCarousel;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House"
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman"
  }
];

const QuotesCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Increased time to 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Quote Text */}
            <p className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              "{quotes[index].text}"
            </p>

            {/* Author Name */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 italic">
              - {quotes[index].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuotesCarousel;

