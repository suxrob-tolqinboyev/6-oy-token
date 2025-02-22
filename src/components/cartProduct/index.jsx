
// import React, { useContext, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaStar,
//   FaShoppingCart,
//   FaBalanceScale,
//   FaHeart,
// } from "react-icons/fa";
// import { NameContext } from "../context";
// // import { Navigate } from "react-router";
// // import { NameContext } from "../../context";

// export default function Card({ product }) {
//   const { setCart } = useContext(NameContext);
//   // console.log(card);
//   const [isActive, setIsActive] = useState(false);

//   function handleAddCart() {
//     setIsActive(true);
//     console.log("Card product:", product),
//     console.log("Product image:", product.image),
//     console.log("Product name:", product.name),
//     console.log("bosildi");
//     setCart((prev) => {
//       const exists = prev.find((item) => item.product.id === product.id);
//       if (exists) {
//         console.log("Mahsulot allaqachon savatda mavjud");
//         return prev;
        
//       }
      
//       return [
//         ...prev,
//         {
//           count: 1,
//           product,
//         },
//         console.log(product.image),
       
//       ];
//     });
//     // setCart((prev) => [
//     //   ...prev,
//     //   {
//     //     count: 0,
//     //     product,
//     //   },
//     // ]);
//   }

//   return (
//     <div
//       key={product.id}
//       className="relative p-4 transition-transform transform bg-white border border-gray-200 rounded-[25px] shadow-lg cursor-pointer hover:shadow-xl hover:scale-102 w-[257px] h-[433px]"
//     >
//       <div className="absolute flex flex-col gap-[10px] space-x-2 text-gray-500 top-3 right-3">
//         <FaHeart
//           className={`cursor-pointer text-[20px] ${
//             1 ? "text-red-500" : "hover:text-red-500"
//           }`}
//         />
//         <FaBalanceScale
//           className={`cursor-pointer text-[20px] ${
//             1 ? "text-blue-500" : "hover:text-blue-500"
//           }`}
//         />
//       </div>
//       {/* <img
//         className="object-cover w-full h-48"
//         src={product.image}
//         alt={product.name}
//       /> */}
//       <img
//         className="object-cover w-full h-48"
//         src={product.image}
//         alt={product.title}
//         onError={(e) => {
//           console.log("Rasm yuklanmadi:", e.target.src);
//           e.target.onerror = null;
//           e.target.src = "/default-image.png"; // Rasm topilmasa, shuni qo‘yadi
//         }}
//       />
//       <div className="mt-4">
//         <NavLink to={"/product/" + product.id}>
//           <h3 className="font-semibold text-gray-800 text-md h-[45px]">
//             {product.name}
//           </h3>
//         </NavLink>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center mt-1 text-yellow-400">
//             {[...Array(5)].map((_, i) => (
//               <FaStar key={i} />
//             ))}
//           </div>
//           <span className="ml-auto text-sm text-[#c2c6d1] mt-[3px]">
//             10 ta sharh
//           </span>
//         </div>
//         <div className="mt-2">
//           <p className="text-[18px] font-bold text-blue-600">
//             {product.price} so'm
//           </p>
//           <p className="inline-block w-full px-2 py-1 mt-1 text-[14px] text-orange-500 border border-orange-400 rounded-md">
//             {product.installment} 1500 so'm x 12 oy
//           </p>
//         </div>
//         <div className="flex justify-between mt-4">
//           <button className="px-4 py-2 w-[172px] text-[14px] text-white transition bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">
//             Hozirroq xarid qilish
//           </button>
//           <button
//             className={`py-2 px-4 w-[47px] h-[35px] text-white transition rounded-lg cursor-pointer flex justify-center items-center ${
//               isActive
//                 ? "bg-red-500 hover:bg-red-600"
//                 : "bg-[#00bfaf] hover:bg-[#00bfafd7]"
//             }`}
//             onClick={handleAddCart}
//           >
//             <FaShoppingCart />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useContext, useState } from "react";
// // import { NavLink } from "react-router-dom";
// import { FaStar, FaShoppingCart, FaBalanceScale, FaHeart } from "react-icons/fa";
// import { NameContext } from "../context";

// export default function Card({ product }) {
//   const { setCart } = useContext(NameContext);
//   const [isActive, setIsActive] = useState(false);

//   // Rasm URL'ni to'g'ri formatda hosil qilish
//   // const imageUrl = product.image?.startsWith("http")
//   //   ? product.image
//   //   : `http://localhost:5000/${product.image}`;

//   function handleAddCart() {
//     setIsActive(true);
//     console.log("Savatchaga qo'shildi:", product);

//     setCart((prev) => {
//       const exists = prev.find((item) => item.product.id === product.id);
//       if (exists) {
//         console.log("Mahsulot allaqachon savatda mavjud");
//         return prev;
//       }

//       return [...prev, { count: 1, product }];
//     });
//   }

//   return (
//     <div
//       key={product.id}
//       className="relative p-4 transition-transform transform bg-white border border-gray-200 rounded-[25px] shadow-lg cursor-pointer hover:shadow-xl hover:scale-102 w-[257px] h-[433px]"
//     >
//       <div className="absolute flex flex-col gap-[10px] space-x-2 text-gray-500 top-3 right-3">
//         <FaHeart className="cursor-pointer text-[20px] hover:text-red-500" />
//         <FaBalanceScale className="cursor-pointer text-[20px] hover:text-blue-500" />
//       </div>

//       {/* <img
//         className="object-cover w-full h-48"
//         src={imageUrl}
//         alt={product.name || "Mahsulot"}
//         onError={(e) => {
//           console.log("Rasm yuklanmadi:", e.target.src);
//           e.target.onerror = null;
//           e.target.src = "/default-image.png";
//         }}
//       /> */}

//       <div className="mt-4">
//         {/* <NavLink to={`/product/${product.id}`}> */}
//           <h3 className="font-semibold text-gray-800 text-md h-[45px]">
//             {product.name}
//           </h3>
//         {/* </NavLink> */}

//         <div className="flex items-center justify-between">
//           <div className="flex items-center mt-1 text-yellow-400">
//             {[...Array(5)].map((_, i) => (
//               <FaStar key={i} />
//             ))}
//           </div>
//           <span className="ml-auto text-sm text-[#c2c6d1] mt-[3px]">
//             10 ta sharh
//           </span>
//         </div>

//         <div className="mt-2">
//           <p className="text-[18px] font-bold text-blue-600">{product.price} so'm</p>
//           <p className="inline-block w-full px-2 py-1 mt-1 text-[14px] text-orange-500 border border-orange-400 rounded-md">
//             {product.installment} 1500 so'm x 12 oy
//           </p>
//         </div>

//         <div className="flex justify-between mt-4">
//           <button className="px-4 py-2 w-[172px] text-[14px] text-white transition bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">
//             Hozirroq xarid qilish
//           </button>
//           <button
//             className={`py-2 px-4 w-[47px] h-[35px] text-white transition rounded-lg cursor-pointer flex justify-center items-center ${
//               isActive ? "bg-red-500 hover:bg-red-600" : "bg-[#00bfaf] hover:bg-[#00bfafd7]"
//             }`}
//             onClick={handleAddCart}
//           >
//             <FaShoppingCart />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useContext, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaStar,
//   FaShoppingCart,
//   FaBalanceScale,
//   FaHeart,
// } from "react-icons/fa";
// import { NameContext } from "../context";
// // import { Navigate } from "react-router";
// // import { NameContext } from "../../context";

// export default function Card({ product }) {
//   const { setCart } = useContext(NameContext);
//   // console.log(card);
//   const [isActive, setIsActive] = useState(false);

  
//   function handleAddCart() {
//     setIsActive(true);
//     useEffect(() => {
//       console.log("Komponent yuklandi:", product);
//     }, []); 
  
//     setCart((prev) => {
//       const exists = prev.some((item) => item.product.id === product.id);
//       if (exists) {
//         console.log("Mahsulot allaqachon savatda mavjud");
//         return prev;
//       }
  
//       return [...prev, { count: 1, product }];
//     });
//   }
//   handleAddCart()
  
  
//   // function handleAddCart() {
//   //   setIsActive(true);

//   //   console.log("bosildi");
//   //   setCart((prev) => {
//   //     const exists = prev.find((item) => item.product.id === product.id);
//   //     console.log(item.product.image);
      
//   //     if (exists) {
//   //       console.log("Mahsulot allaqachon savatda mavjud");
        
//   //       return prev;
//   //     }

//   //     return [
//   //       ...prev,
//   //       {
//   //         count: 1,
//   //         product,
//   //       },
//   //     ];
//   //   });
    
//   //   // setCart((prev) => [
//   //   //   ...prev,
//   //   //   {
//   //   //     count: 0,
//   //   //     product,
//   //   //   },
//   //   // ]);
//   // }
//   // handleAddCart()

  
//   return (
//     <div
//       key={product.id}
//       className="relative p-4 transition-transform transform bg-white border border-gray-200 rounded-[25px] shadow-lg cursor-pointer hover:shadow-xl hover:scale-102 w-[257px] h-[433px]"
//     >
//       <div className="absolute flex flex-col gap-[10px] space-x-2 text-gray-500 top-3 right-3">
//         <FaHeart
//           className={`cursor-pointer text-[20px] ${
//             1 ? "text-red-500" : "hover:text-red-500"
//           }`}
//         />
//         <FaBalanceScale
//           className={`cursor-pointer text-[20px] ${
//             1 ? "text-blue-500" : "hover:text-blue-500"
//           }`}
//         />
//       </div>
//       <img
//         className="object-cover w-full h-48"
//         src={product.image}
//         alt={product.title}
//       />
//       <div className="mt-4">
//         <NavLink to={"/product/" + product.id}>
//           <h3 className="font-semibold text-gray-800 text-md h-[45px]">
//             {product.name}
//           </h3>
//         </NavLink>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center mt-1 text-yellow-400">
//             {[...Array(5)].map((_, i) => (
//               <FaStar key={i} />
//             ))}
//           </div>
//           <span className="ml-auto text-sm text-[#c2c6d1] mt-[3px]">
//             10 ta sharh
//           </span>
//         </div>
//         <div className="mt-2">
//           <p className="text-[18px] font-bold text-blue-600">
//             {product.price} so'm
//           </p>
//           <p className="inline-block w-full px-2 py-1 mt-1 text-[14px] text-orange-500 border border-orange-400 rounded-md">
//             {product.installment} 1500 so'm x 12 oy
//           </p>
//         </div>
//         <div className="flex justify-between mt-4">
//           <button className="px-4 py-2 w-[172px] text-[14px] text-white transition bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">
//             Hozirroq xarid qilish
//           </button>
//           <button
//             className={`py-2 px-4 w-[47px] h-[35px] text-white transition rounded-lg cursor-pointer flex justify-center items-center ${
//               isActive
//                 ? "bg-red-500 hover:bg-red-600"
//                 : "bg-[#00bfaf] hover:bg-[#00bfafd7]"
//             }`}
//             onClick={handleAddCart}
//           >
//             <FaShoppingCart />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaStar, FaShoppingCart, FaBalanceScale, FaHeart } from "react-icons/fa";
import { NameContext } from "../context";

export default function Card({ product }) {
  const { setCart } = useContext(NameContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log("Komponent yuklandi:", product);
  }, []);

  function handleAddCart() {
    setIsActive(true);
    setCart((prev) => {
      const exists = prev.some((item) => item.product.id === product.id);
      if (exists) {
        console.log("Mahsulot allaqachon savatda mavjud");
        return prev;
      }
      return [...prev, { count: 1, product }];
    });
  }

  return (
    <div className="relative p-4 transition-transform transform bg-white border border-gray-200 rounded-[25px] shadow-lg cursor-pointer hover:shadow-xl hover:scale-102 w-[257px] h-[433px]">
      <div className="absolute flex flex-col gap-[10px] space-x-2 text-gray-500 top-3 right-3">
        <FaHeart className="cursor-pointer text-[20px] hover:text-red-500" />
        <FaBalanceScale className="cursor-pointer text-[20px] hover:text-blue-500" />
      </div>
      <img className="object-cover w-full h-48" src={product.image} alt={product.title} />
      <div className="mt-4">
        <NavLink to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-800 text-md h-[45px]">{product.name}</h3>
        </NavLink>
        <div className="flex items-center justify-between">
          <div className="flex items-center mt-1 text-yellow-400">
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
          </div>
          <span className="ml-auto text-sm text-[#c2c6d1] mt-[3px]">10 ta sharh</span>
        </div>
        <div className="mt-2">
          <p className="text-[18px] font-bold text-blue-600">{product.price} so'm</p>
          <p className="inline-block w-full px-2 py-1 mt-1 text-[14px] text-orange-500 border border-orange-400 rounded-md">
            {product.installment} 1500 so'm x 12 oy
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 w-[172px] text-[14px] text-white transition bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">
            Hozirroq xarid qilish
          </button>
          <button
            className={`py-2 px-4 w-[47px] h-[35px] text-white transition rounded-lg cursor-pointer flex justify-center items-center ${isActive ? "bg-red-500 hover:bg-red-600" : "bg-[#00bfaf] hover:bg-[#00bfafd7]"}`}
            onClick={handleAddCart}
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
