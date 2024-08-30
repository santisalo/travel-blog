"use client";

import { useEffect, useState } from "react";

export default function TrainPlace({ place }) {
  const [qtyWindows, setQtyWindows] = useState(6)
  useEffect(() => {
    const theTrainWidth = document.getElementById("the-train").offsetWidth

    setQtyWindows(Math.floor(theTrainWidth / 27))

  }, [])
  
  return (
    <div className="absolute top-10 w-full">
      <div
        className="absolute top-0 h-8 w-2/5 text-center p-0 rounded-md mb-1 rounded-tr-3xl"
        style={{
          backgroundColor: place.primaryColor,
          viewTransitionName: "the-train",
          left: "30%",
        }}
      >
        <div id="the-train" className="flex ps-2 pe-5 pt-1.5 justify-between w-full">
          {[...Array(qtyWindows)].map((_, i) => (
            <div key={i} className="bg-yellow-300 h-2 w-3"></div>
          ))}
        </div>
        <p className="text-xs mt-1 font-bold">{place.code}</p>
      </div>
      <div className="bg-slate-300 h-1 w-full top-8 absolute"></div>
    </div>
  );
}
