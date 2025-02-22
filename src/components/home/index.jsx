
import { useEffect, useState } from "react";
import ProductSwiper from "../swiper";
import axios from "axios";
import Card from "../cartProduct";

function Home() {
  const [products, setProducts] = useState(null); // Dastlab null holatda bo'ladi
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("http://localhost:5000/products");
        console.log("API Response:", res.data.data);
        setProducts(res.data.data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        setError("Mahsulotlarni yuklashda xatolik yuz berdi.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <p className="text-lg text-center">Yuklanmoqda...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="w-[1400px] flex flex-col items-center m-auto">
      <ProductSwiper />
      <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
