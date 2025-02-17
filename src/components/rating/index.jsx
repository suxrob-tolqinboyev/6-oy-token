import React, { useState, useEffect } from "react";
import axios from "axios";

const StarRating = ({ rating, onRate }) => {
  return (
    <div className="flex space-x-1 cursor-pointer">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => onRate(index + 1)}
          className={`text-3xl ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function App() {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    async function fetchRating() {
      try {
        const res = await axios.get("http://localhost:5000/product/1");
        setRating(res.data.rating);
      } catch (error) {
        console.error("Xatolik:", error);
      }
    }
    fetchRating();
  }, []);

  const handleRate = async (newRating) => {
    setRating(newRating);
    try {
      await axios.post("http://localhost:5000/rate", { id: 1, rating: newRating });
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="mb-2">Mahsulot reytingi:</h2>
      {rating === null ? <p>Yuklanmoqda...</p> : <StarRating rating={rating} onRate={handleRate} />}
    </div>
  );
}
