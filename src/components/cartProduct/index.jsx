// import { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { NameContext } from "../context";

// const products = [
//   {
//     id: 1,
//     name: "Xiaomi Redmi Note 14 Pro 8/256GB",
//     price: 3499000,
//     oldPrice: 3969000,
//     image: "https://via.placeholder.com/300",
//     rating: 5,
//     brand: "Xiaomi",
//     model: "Note 14 Pro",
//     availability: "Bor",
//     installment: 414100,
//   },
//   {
//     id: 2,
//     name: "iPhone 15 Pro Max 256GB",
//     price: 14999000,
//     oldPrice: 15999000,
//     image: "https://via.placeholder.com/300",
//     rating: 5,
//     brand: "Apple",
//     model: "iPhone 15 Pro Max",
//     availability: "Bor",
//     installment: 1250000,
//   },
// ];

// const Cart = () => {
//     const {cart} = useContext(NameContext)
//   const { id } = useParams();
//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return <h2 className="text-2xl text-center text-red-500">Mahsulot topilmadi!</h2>;
//   }

//   return (
//     <div className="grid max-w-5xl grid-cols-2 gap-6 p-6 mx-auto bg-white rounded-lg shadow-lg">
//       <div className="space-y-4">
//         <img src={product.image} alt={product.name} className="w-full rounded-lg" />
//         <span className="px-2 py-1 text-xs text-white bg-yellow-400 rounded">SUPER NARX</span>
//       </div>

//       <div>
//         <h1 className="text-2xl font-bold">{product.name}</h1>
//         <div className="flex items-center space-x-2">
//           <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
//           <span className="text-sm text-gray-500">2 ta sharh</span>
//         </div>

//         <p className="text-gray-400 line-through">{product.oldPrice} so‘m</p>
//         <p className="text-2xl font-bold text-red-500">{product.price} so‘m</p>

//         <p>
//           <strong>Brend:</strong> {product.brand}
//         </p>
//         <p>
//           <strong>Model:</strong> {product.model}
//         </p>
//         <p>
//           <strong>Holati:</strong> {product.availability}
//         </p>

//         <div className="flex mt-4 space-x-3">
//           <button className="px-6 py-2 text-white bg-green-500 rounded-lg">+ Savatga qo‘shish</button>
//           <button className="px-6 py-2 text-white bg-blue-500 rounded-lg">Bir marta bosib sotib olish</button>
//         </div>

//         <h2 className="mt-6 text-lg font-semibold">Muddatli to‘lov</h2>
//         <p className="text-sm text-gray-500">12 oy: {product.installment} so‘m / oy</p>
//       </div>
//     </div>
//   );
// };

// export default Cart;
// import React, { useContext } from "react";
// import { NameContext } from "../context";

// const Cart = () => {
//     const { cart } = useContext(NameContext);

//     return (
//         <div>
//             {cart.length > 0 ? (
//                 cart.map((item, index) => (
//                     <div key={index} className="p-2 border-b">
//                         <span className="font-bold">{item.product.name}</span> - {item.count} ta
//                     </div>
//                 ))
//             ) : (
//                 <p className="text-gray-500">Savat bo‘sh</p>
//             )}
//         </div>
//     );
// };

// export default Cart;

import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaStar,
  FaShoppingCart,
  FaBalanceScale,
  FaHeart,
} from "react-icons/fa";
import { NameContext } from "../context";
// import { Navigate } from "react-router";
// import { NameContext } from "../../context";

export default function Card({ product }) {
  const { setCart } = useContext(NameContext);
  // console.log(card);
  const [isActive, setIsActive] = useState(false);

  function handleAddCart() {
    setIsActive(true);

    console.log("bosildi");
    setCart((prev) => {
      const exists = prev.find((item) => item.product.id === product.id);
      if (exists) {
        console.log("Mahsulot allaqachon savatda mavjud");
        return prev;
      }

      return [
        ...prev,
        {
          count: 1,
          product,
        },
      ];
    });
    // setCart((prev) => [
    //   ...prev,
    //   {
    //     count: 0,
    //     product,
    //   },
    // ]);
  }

  return (
    <div
      key={product.id}
      className="relative p-4 transition-transform transform bg-white border border-gray-200 rounded-[25px] shadow-lg cursor-pointer hover:shadow-xl hover:scale-102 w-[257px] h-[433px]"
    >
      <div className="absolute flex flex-col gap-[10px] space-x-2 text-gray-500 top-3 right-3">
        <FaHeart
          className={`cursor-pointer text-[20px] ${
            1 ? "text-red-500" : "hover:text-red-500"
          }`}
        />
        <FaBalanceScale
          className={`cursor-pointer text-[20px] ${
            1 ? "text-blue-500" : "hover:text-blue-500"
          }`}
        />
      </div>
      <img
        className="object-cover w-full h-48"
        src={product.image}
        alt={product.title}
      />
      <div className="mt-4">
        <NavLink to={"/product/" + product.id}>
          <h3 className="font-semibold text-gray-800 text-md h-[45px]">
            {product.name}
          </h3>
        </NavLink>

        <div className="flex items-center justify-between">
          <div className="flex items-center mt-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="ml-auto text-sm text-[#c2c6d1] mt-[3px]">
            10 ta sharh
          </span>
        </div>
        <div className="mt-2">
          <p className="text-[18px] font-bold text-blue-600">
            {product.price} so'm
          </p>
          <p className="inline-block w-full px-2 py-1 mt-1 text-[14px] text-orange-500 border border-orange-400 rounded-md">
            {product.installment} 1500 so'm x 12 oy
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 w-[172px] text-[14px] text-white transition bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">
            Hozirroq xarid qilish
          </button>
          <button
            className={`py-2 px-4 w-[47px] h-[35px] text-white transition rounded-lg cursor-pointer flex justify-center items-center ${
              isActive
                ? "bg-red-500 hover:bg-red-600"
                : "bg-[#00bfaf] hover:bg-[#00bfafd7]"
            }`}
            onClick={handleAddCart}
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}