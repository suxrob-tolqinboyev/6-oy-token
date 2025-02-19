// import axios from "axios";
// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Admin = () => {
//   async function handleSubmit(e) {
//     e.preventDefault();
    
//     const formData = new FormData(e.target);
    
//     try {
//       const res = await axios.post("http://localhost:5000/products", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       toast.success("Mahsulot muvaffaqiyatli qo‘shildi!");
//       e.target.reset(); // Formani tozalash

//     } catch (error) {
//       console.error("Xatolik yuz berdi:", error);
//       toast.error("Xatolik yuz berdi! Qayta urinib ko‘ring.");
//     }
//   }

//   return (
//     <div className=" w-[1400px] mx-auto  flex flex-col items-center">
//       <h1 >Admin panel</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col w-[500px] gap-3 p-4 border rounded-lg shadow-lg "
//       >
//         <input className="p-2 border" type="text" placeholder="Name" name="name" required />
//         <input className="p-2 border" type="text" placeholder="Category" name="category" required />
//         <input className="p-2 border" type="number" placeholder="Price" name="price" required />
//         <input className="p-2 border" type="text" placeholder="Description" name="description" required />
//         <input className="p-2 border" type="file" name="image" required />
//         <input className="p-2 border" type="number" placeholder="Stock" name="stock" required />
//         <input className="p-2 border" type="number" placeholder="Rating" name="rating" required />
//         <button className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600">Add Product</button>
//       </form>

//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// };

// export default Admin;

import axios from "axios";
import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NameContext } from "../context";

const Admin = () => {
  const {token} = useContext(NameContext)
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await axios.post("http://localhost:5000/products", formData, {
        headers: { Authorization : "Bareer" + token},
      });

      toast.success("Mahsulot muvaffaqiyatli qo‘shildi!");
      e.target.reset(); // Formani tozalash
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error("Xatolik yuz berdi! Qayta urinib ko‘ring.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
          Admin Panel
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Category"
            name="category"
            required
          />
          <input
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            placeholder="Price"
            name="price"
            required
          />
          <input
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Description"
            name="description"
            required
          />
          <input
            className="p-3 border border-gray-300 rounded cursor-pointer file:bg-blue-500 file:text-white file:border-none file:py-2 file:px-4 file:rounded"
            type="file"
            name="image"
            required
          />
          <input
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            placeholder="Stock"
            name="stock"
            required
          />
          <input
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            placeholder="Rating"
            name="rating"
            required
          />
          <button className="p-3 text-white transition bg-blue-500 rounded hover:bg-blue-600">
            Add Product
          </button>
        </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default Admin;
