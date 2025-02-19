import React, { useState } from "react";
import { FaTrash, FaMinus, FaPlus, FaHeart } from "react-icons/fa";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
      {/* Rasm */}
      <img src={item.image} alt={item.name} className="object-cover w-24 h-24 rounded-lg" />

      {/* Mahsulot ma'lumotlari */}
      <div className="flex-1 px-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <span className="text-sm text-gray-500">{item.description}</span>
        <div className="mt-2">
          <span className="px-2 py-1 text-xs text-white bg-blue-500 rounded">{item.brand}</span>
        </div>
      </div>

      {/* Narx va miqdor */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="p-2 border rounded-full hover:bg-gray-100"
          disabled={item.quantity <= 1}
        >
          <FaMinus />
        </button>

        <span className="text-lg font-semibold">{item.quantity}</span>

        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-2 border rounded-full hover:bg-gray-100"
        >
          <FaPlus />
        </button>
      </div>

      {/* Narx va o‘chirish tugmasi */}
      <div className="text-right">
        <span className="text-sm text-gray-400 line-through">{item.oldPrice} so‘m</span>
        <p className="text-lg font-bold text-blue-600">{item.price} so‘m</p>
        <p className="text-sm text-orange-500">{(item.price / 12).toFixed(0)} so‘m x 12 oy</p>
      </div>

      {/* Yurak va o‘chirish tugmalari */}
      <div className="flex space-x-3">
        <button className="text-gray-400 hover:text-red-500">
          <FaHeart />
        </button>
        <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

const Product = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Xiaomi Redmi Note 14 Pro 8/256GB",
      description: "Midnight Black. ХИТ ПРОДАЖ!",
      image: "https://via.placeholder.com/100",
      brand: "Xiaomi",
      price: 3499000,
      oldPrice: 3969000,
      quantity: 1,
    },
  ]);

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-3xl p-6 mx-auto bg-gray-100 rounded-lg">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={handleRemoveItem} onUpdateQuantity={handleUpdateQuantity} />
        ))
      ) : (
        <p className="text-center text-gray-500">Savatcha bo‘sh</p>
      )}
    </div>
  );
};

export default Product;

