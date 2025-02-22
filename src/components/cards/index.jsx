
// import React, { useContext } from "react";
// import { NameContext } from "../context";
// // import Navbar from "../components/Navbar";
// // import Navbar from "../navbar";

// export default function Cart() {
//   const { cart, setCart } = useContext(NameContext);

//   function plus(id) {
//     console.log(id);

//     setCart((items) =>
//       items.map((item) => {
//         if (item.product.id === id) {
//           return {
//             ...item,
//             count: item.count + 1,
//           };
//         } else {
//           return item;
//         }
//       })
//     );
//   }

//   function minus(id) {
//     console.log(id);

//     setCart((items) =>
//       items.map((item) => {
//         if (item.count > 1) {
//           if (item.product.id === id) {
//             return {
//               ...item,
//               count: item.count - 1,
//             };
//           }
//         } else {
//           return item;
//         }
//       })
//     );
//   }

//   function deleteCart(id) {
//     setCart((cart) => cart.filter((item) => item.product.id !== id));
//   }

//   return (
//     <>

//       <div className="w-[1350px] mx-auto my-[20px]">
//         <h1 className="text-[25px] font-bold my-[20px] ">
//           Cartga qo'shilgan mahsulotlar:
//         </h1>
//         {cart.map((item) => (
//           // <div className="">
//           //   {item.product.name} - {item.count}
//           //   <img src={item.product.image} alt="" />
//           //   {item.product.category}
//           //   {item.product.price}
//           // </div>
//           <>
//             <div className="flex items-center p-4 space-x-4 overflow-hidden bg-white rounded-lg shadow-md">
//               <img
//                 src={item.product.image}
//                 alt={item.product.name}
//                 className="object-cover rounded-lg h-50 w-50"
//               />
//               <div className="flex flex-col justify-between">
//                 <h3 className="text-lg font-semibold">{item.product.name}</h3>
//                 <span className="text-sm text-gray-500">
//                   {item.product.category}
//                 </span>
//                 <span className="text-sm text-gray-500">
//                   Miqdori: {item.count}
//                 </span>
//                 <span className="text-lg font-bold text-blue-500">
//                   {item.product.price} so'm
//                 </span>
//                 <div className="flex">
//                   <button
//                     className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
//                     onClick={() => plus(item.product.id)}
//                   >
//                     +
//                   </button>
//                   <button
//                     className="px-4 py-2 ml-2 font-semibold text-white rounded-lg shadow-md cursor-pointer bg-amber-500 hover:bg-amber-600 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300"
//                     onClick={() => minus(item.product.id)}
//                   >
//                     -
//                   </button>
//                   <button
//                     onClick={() => deleteCart(item.product.id)}
//                     className="px-4 py-2 ml-2 font-semibold text-white rounded-lg shadow-md cursor-pointer bg-amber-500 hover:bg-amber-600 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300"
//                   >
//                     O'chirish
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         ))}
//       </div>
//     </>
//   );
// }

import React, { useContext } from "react";
import { NameContext } from "../context";

export default function Cart() {
  const { cart, setCart } = useContext(NameContext);

  function plus(id) {
    setCart((items) =>
      items.map((item) =>
        item.product.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  }

  function minus(id) {
    setCart((items) =>
      items.map((item) =>
        item.product.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  }

  function deleteCart(id) {
    setCart((cart) => cart.filter((item) => item.product.id !== id));
  }

  return (
    <div className="w-[1350px] mx-auto my-[20px]">
      <h1 className="text-[25px] font-bold my-[20px] ">
        Cartga qo‘shilgan mahsulotlar:
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Savatcha bo‘sh!</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center p-4 space-x-4 bg-white rounded-lg shadow-md"
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              className="object-cover rounded-lg h-50 w-50"
            />
            <div className="flex flex-col justify-between">
              <h3 className="text-lg font-semibold">{item.product.name}</h3>
              <span className="text-sm text-gray-500">
                {item.product.category}
              </span>
              <span className="text-sm text-gray-500">
                Miqdori: {item.count}
              </span>
              <span className="text-lg font-bold text-blue-500">
                {item.product.price} so'm
              </span>
              <div className="flex">
                <button
                  className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600"
                  onClick={() => plus(item.product.id)}
                >
                  +
                </button>
                <button
                  className="px-4 py-2 ml-2 font-semibold text-white rounded-lg shadow-md cursor-pointer bg-amber-500 hover:bg-amber-600"
                  onClick={() => minus(item.product.id)}
                >
                  -
                </button>
                <button
                  onClick={() => deleteCart(item.product.id)}
                  className="px-4 py-2 ml-2 font-semibold text-white bg-red-500 rounded-lg shadow-md cursor-pointer hover:bg-red-600"
                >
                  O'chirish
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
