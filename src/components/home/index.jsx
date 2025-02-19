import { useEffect, useState } from "react";
import Cards from "../cards";
import ProductSwiper from "../swiper";



function Home() {

  useEffect(() => {}, []);

  return (
    <div className="">
      <div className="w-[1400px] flex flex-col items-center m-auto">
        <ProductSwiper />
        <Cards />
      </div>
    </div>
  );
}
export default Home;
