
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/products/${id}`);
        console.log(res.data.data);
        setProduct(res.data.data);
      } catch (err) {
        console.log(err.message);

        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, []);

  return (
    // <div>
    //   Product - {id} {product.name} {product.category} {product.price}{" "}
    //   {product.rating} {product.stock}
    //   <img src={product.image}  alt="" />
    // </div>
    <>

      {error && (
        <div
          className="flex items-center justify-center w-[500px] mx-auto mt-[100px] p-4 mb-4 text-sm text-red-700 bg-red-100 border border-red-400 rounded-lg"
          role="alert"
        >
          <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v5a1 1 0 102 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <p>Error: {error}</p>
        </div>
      )}
      {/* <h1 className="bg-red-500">Error: {error}</h1>} */}
      {!loading && !error && (
        <div className="flex justify-center  py-[100px] bg-gray-100">
          <div className="flex max-w-[1000px] h-[500px] overflow-hidden bg-white shadow-lg rounded-lg">
            <div className="w-1/2">
              <img
                className="object-cover w-full h-full rounded-l-lg"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="w-1/2 p-4">
              <div className="flex justify-between mt-[80px]">
                <span className="text-[20px] font-semibold text-blue-500">
                  SKIDKA -15%
                </span>
                <div className="flex items-center text-gray-500">
                  <span className="ml-1 text-[18px] text-blue-500">
                    ⭐️ {product.rating}{" "}
                  </span>
                </div>
              </div>
              <h3 className="mt-2 mb-2 text-[25px] font-bold">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-[25px] font-bold text-red-500">
                  {product.price} so'm
                </span>
                <button className="px-3 py-2 text-[16px] text-white  bg-blue-500 rounded hover:bg-blue-600 cursor-pointer">
                  Tarqatish
                </button>
              </div>
              <p className="mt-4 text-[16px]  text-gray-500">
                Brend: ..... {product.category}
              </p>
              <p className="text-[16px]  text-gray-500">
                Model: ..... {product.description}
              </p>
              <p className="text-[16px]  text-gray-500">
                Qoldiq: .....
                {product.stock} ta
              </p>
              <div className="flex mt-4 space-x-2">
                <button className="px-5 py-3 text-[18px] text-white bg-green-500 rounded cursor-pointer hover:bg-green-600">
                  Savatchaga qo'shing
                </button>
                <button className="px-5 py-3 text-[18px] text-blue-500 border border-blue-500 rounded hover:bg-blue-600 hover:text-white cursor-pointer">
                  Bir marta bosib sotib oling
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;


