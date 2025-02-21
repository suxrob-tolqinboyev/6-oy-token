import { useEffect, useState } from "react";

import ProductSwiper from "../swiper";
import axios from "axios";
// import Cart from "../cards";
import Card from "../cartProduct";

function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function card() {
      try {
        const res = await axios.get("http://localhost:5000/products");
        console.log(res.data.data);
        setProduct(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    card();
  }, []);

  return (
    <div className="">
      <div className="w-[1400px] flex flex-col items-center m-auto">
        <ProductSwiper />
        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {product?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
