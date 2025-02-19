import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import LikeCompare from "../live-comparesd";
import { NameContext } from "../context";

function StarRating({ rating }) {
  


  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Cards({product}) {
  

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:5000/products");
        console.log("Serverdan kelgan ma'lumot:", res.data);

        const products = res.data.data || res.data;
        if (Array.isArray(products)) {
          setAdd(products);
        } else {
          console.error("Noto‘g‘ri formatdagi ma’lumot:", res.data);
          setAdd([]);
        }
      } catch (error) {
        console.error("Xatolik:", error);
        setAdd([]);
      }
    }
    fetchData();
  }, []);

  const [add, setAdd] = useState([]);
   const {setCart} = useContext(NameContext)
  function handleCart() {
    console.log("add  ");
    setCart((prev) => [
      ...prev , {
        count: 1,
        product
      }
    ] )
    
  }

  return (
    <div className="w-[1400px] grid grid-cols-5 gap-[15px] px-[10px] items-center m-auto ">
      {add?.length > 0 ? (
        add.map((item, index) => (
          <div
            key={index}
            className="w-[260px] flex flex-col items-center bg-white p-[15px] rounded-[20px] shadow-lg"
          >
            <div className="w-[220px] h-[293px] relative">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={item.image || "https://via.placeholder.com/220x293"}
                alt={item.name || "Mahsulot rasmi"}
              />
              <LikeCompare className="absolute top-[20px] right-0" />
            </div>
            <div className="flex flex-col items-start w-full mt-2">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <StarRating rating={item.rating} />
              <p className="font-medium text-gray-700">{item.price} so‘m</p>
              <div className="flex justify-between w-full mt-3">
                <button className="relative h-[50px] w-40 overflow-hidden border rounded-[10px] bg-[#006BFF] px-3 text-white shadow-md transition-all hover:bg-blue-700">
                  <span className="relative z-10">Batafsil</span>
                </button>
                <button className="flex items-center py-[5px] px-[18px] rounded-[8px] bg-[#00BFAF] hover:bg-[#009f8f]" onClick={handleCart}>
                  <FaShoppingCart className="text-2xl text-white" />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-5 text-center text-gray-600">Ma’lumotlar yuklanmoqda...</p>
      )}
    </div>
  );
}

