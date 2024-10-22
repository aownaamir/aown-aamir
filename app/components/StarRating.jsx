"use client";
import { useState } from "react";
import Star from "./Star";

function StarRating({ rating, setRating }) {
  // const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  function handleRating(rate) {
    setRating(rate);
  }
  function enter(rate) {
    setTempRating(rate);
  }
  function leave() {
    setTempRating(rating);
  }
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="star-container">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            full={tempRating >= i + 1}
            handleRating={() => handleRating(i + 1)}
            Enter={() => enter(i + 1)}
            Leave={leave}
          />
        ))}
      </div>

      <p className="text-white">{tempRating || ""}</p>
    </div>
  );
}

export default StarRating;
