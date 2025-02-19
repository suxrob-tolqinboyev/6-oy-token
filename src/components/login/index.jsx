// import React, { useState } from "react";
// import { FaUser, FaLock } from "react-icons/fa";

// const Logina = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login ma'lumotlari:", formData);

//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">
//           Login
//         </h2>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           {/* Username Input */}
//           <div className="relative">
//             <FaUser className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div className="relative">
//             <FaLock className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full p-3 text-white transition bg-blue-500 rounded hover:bg-blue-600"
//           >
//             Login
//           </button>
//         </form>

//         {/* Register Link */}
//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account?{" "}
//           <a href="/register" className="text-blue-500 hover:underline">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Logina;

