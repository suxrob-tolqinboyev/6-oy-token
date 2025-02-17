import { useState } from "react";
import { RiScales3Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";

export default function LikeCompare() {
  const [liked, setLiked] = useState(false);
  const [compared, setCompared] = useState(false);

  return (
    <div className="flex flex-col gap-[5px] absolute top-[20px] right-0">
      {/* Yurakcha tugmasi */}
      <button
        onClick={() => setLiked(!liked)}
        className={`text-2xl transition-colors duration-300 ${
          liked ? "text-red-500" : "text-gray-400"
        }`}
      >
        <FaHeart />
      </button>

      {/* Tarozi tugmasi */}
      <button
        onClick={() => setCompared(!compared)}
        className={`text-2xl transition-colors duration-300 ${
          compared ? "text-blue-500" : "text-gray-400"
        }`}
      >
        <RiScales3Fill />
      </button>
    </div>
  );
}
