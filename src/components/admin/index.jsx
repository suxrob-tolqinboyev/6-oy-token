// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { useState , useEffect } from "react";

// import React from "react";

// const Admin = () => {
//   const [ads, setAds] = useState([]);

//   useEffect(() => {
//     async function handleSubmit(e) {
//       e.preventDefault();
//       const formData = new FormData(e.target);

//       try {
//         const res = await axios.post(
//           "http://localhost:5000/products",
//           formData
//         );
//         setAds(formData);
//         console.log(formData);
//       } catch (err) {
//         console.log(err);
//         toast.error(err?.response?.data?.message || "An error occurred");
//       }
//     }
//     handleSubmit();
//   }, []);

//   return (
//     <div>
//       <form className="" action="" method="">
//         <input type="text" placeholder="name" name="name" />
//         <input type="text" placeholder="category" name="category" />
//         <input type="number" placeholder="price" name="price" />
//         <input type="text" placeholder="description" name="description" />
//         <input type="file" placeholder="image" name="image" />
//         <input type="text" placeholder="name" name="name" />
//         <input type="number" placeholder="stock" name="stock" />
//         <input type="number" placeholder="rating" name="rating" />
//       </form>
//     </div>
//   );
// };

// export default Admin;


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import React from "react";

const Admin = () => {
  const [ads, setAds] = useState([]);

  // ✅ Form jo‘natish funksiyasi
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await axios.post("http://localhost:5000/products", formData);
      
      // ✅ Yangi qo‘shilgan ma'lumotni state ga qo‘shish
      setAds([...ads, res.data]);

      toast.success("Mahsulot muvaffaqiyatli qo‘shildi!");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || "Xatolik yuz berdi!");
    }
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Mahsulot Qo‘shish</h2>

      {/* ✅ Formga `onSubmit` qo‘shildi */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-1/2">
        <input type="text" placeholder="name" name="name" required className="border p-2" />
        <input type="text" placeholder="category" name="category" required className="border p-2" />
        <input type="number" placeholder="price" name="price" required className="border p-2" />
        <input type="text" placeholder="description" name="description" className="border p-2" />
        <input type="file" name="image" className="border p-2" />
        <input type="number" placeholder="stock" name="stock" required className="border p-2" />
        <input type="number" placeholder="rating" name="rating" required className="border p-2" />
        
        {/* ✅ Submit tugmasi qo‘shildi */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
          Mahsulot Qo‘shish
        </button>
      </form>

      {/* ToastContainer qo‘shildi */}
      <ToastContainer />
    </div>
  );
};

export default Admin;
