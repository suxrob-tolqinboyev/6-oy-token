import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

const ProductSwiper = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:5000/products");
        if (res.data && Array.isArray(res.data.data)) {
          setProducts(res.data.data);
        } else {
          console.error("Noto‘g‘ri format:", res.data);
        }
      } catch (error) {
        console.error("Xatolik:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-full px-5">
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={6} // Bir qatorga nechta mahsulot tushishi
        navigation
        className="py-5"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index} className="p-4 bg-blue-500 rounded-lg">
            <div className="flex flex-col items-center text-white">
              <img
                src={item.image}
                alt={item.name}
                className="w-[120px] h-[120px] object-contain"
              />
              <h3 className="mt-2 text-sm font-bold text-center">{item.name}</h3>
              <p className="text-lg font-semibold">{item.price} so‘m</p>
              <p className="px-2 py-1 mt-1 text-sm text-blue-500 bg-white rounded-md">
                {item.date}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;

