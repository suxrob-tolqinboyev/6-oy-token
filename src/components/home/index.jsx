import { useEffect, useState } from "react";
import Cards from "../cards";
// import Carousel from "../swiper";


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="">
      <div className="w-[1400px] flex flex-col items-center m-auto">
        
        <Cards />
      </div>
    </div>
  );
}
export default Home;
