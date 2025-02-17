import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import LikeCompare from "../live-comparesd";


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

export default function Cards() {
  const [add, setAdd] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:5000/products");
        console.log("Serverdan kelgan ma'lumot:", res.data);

        if (res.data && Array.isArray(res.data.data)) {
          setAdd(res.data.data);
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

  return (
    <div className="w-[1400px] grid grid-cols-5 gap-[15px] px-[10px] items-center m-auto ">
      {add?.length > 0 ? (
        add.map((item, index) => (
          <div
            key={index}
            className="w-[260px] flex flex-col items-center bg-white p-[15px] rounded-[20px]"
          >
            <div className="w-[220px] h-[293px] relative ">
              <img className="w-full" src={item.image} alt="" />
              <LikeCompare  className="absolute top-[20px] right-0"/>
            </div>
            <div className="w-full flex flex-col items-start">
              <h2>{item.name}</h2>
              <StarRating rating={item.rating} />
              <p>{item.price} so‘m</p>
              <div className="flex justify-between w-full">
                <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border rounded-[10px] bg-[#006BFF] px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-800 before:transition-all before:duration-500 text-white hover:before:left-0 hover:before:w-full">
                  <span className="relative z-10">Categories</span>
                </button>
                <button className="flex items-center py-[5px] px-[18px] rounded-[8px]  bg-[#00BFAF] " ><FaShoppingCart className="text-2xl text-white flex items-center justify-center " /></button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Ma’lumotlar yuklanmoqda...</p>
      )}
    </div>
  );
}
