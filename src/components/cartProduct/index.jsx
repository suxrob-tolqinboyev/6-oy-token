import { useContext } from "react";
import { useParams } from "react-router-dom";
import { NameContext } from "../context";

const products = [
  {
    id: 1,
    name: "Xiaomi Redmi Note 14 Pro 8/256GB",
    price: 3499000,
    oldPrice: 3969000,
    image: "https://via.placeholder.com/300",
    rating: 5,
    brand: "Xiaomi",
    model: "Note 14 Pro",
    availability: "Bor",
    installment: 414100,
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max 256GB",
    price: 14999000,
    oldPrice: 15999000,
    image: "https://via.placeholder.com/300",
    rating: 5,
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    availability: "Bor",
    installment: 1250000,
  },
];

const Cart = () => {
    const {cart} = useContext(NameContext)
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-2xl text-center text-red-500">Mahsulot topilmadi!</h2>;
  }

  return (
    <div className="grid max-w-5xl grid-cols-2 gap-6 p-6 mx-auto bg-white rounded-lg shadow-lg">
      <div className="space-y-4">
        <img src={product.image} alt={product.name} className="w-full rounded-lg" />
        <span className="px-2 py-1 text-xs text-white bg-yellow-400 rounded">SUPER NARX</span>
      </div>

      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span className="text-sm text-gray-500">2 ta sharh</span>
        </div>

        <p className="text-gray-400 line-through">{product.oldPrice} so‘m</p>
        <p className="text-2xl font-bold text-red-500">{product.price} so‘m</p>

        <p>
          <strong>Brend:</strong> {product.brand}
        </p>
        <p>
          <strong>Model:</strong> {product.model}
        </p>
        <p>
          <strong>Holati:</strong> {product.availability}
        </p>

        <div className="flex mt-4 space-x-3">
          <button className="px-6 py-2 text-white bg-green-500 rounded-lg">+ Savatga qo‘shish</button>
          <button className="px-6 py-2 text-white bg-blue-500 rounded-lg">Bir marta bosib sotib olish</button>
        </div>

        <h2 className="mt-6 text-lg font-semibold">Muddatli to‘lov</h2>
        <p className="text-sm text-gray-500">12 oy: {product.installment} so‘m / oy</p>
      </div>
    </div>
  );
};

export default Cart;
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

