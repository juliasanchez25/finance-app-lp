// import { useEffect, useRef } from "react";
import { dataItems } from "./utils/dataItems";

export const Data = () => {
  return (
    <section className="mt-16 bg-black h-48 gap-32 flex items-center justify-center lg:gap-52 lg:h-52 overflow-hidden">
      {dataItems.map((item, index) => (
        <div
          key={index}
          className="text-center"
        >
          <h2 className="mb-2 font-bold text-white text-3xl lg:mb-4 lg:text-5xl">{item.number}</h2>
          <p className="font-medium text-[#AEAEAE] text-xl lg:text-2xl">{item.description}</p>
        </div>
      ))}
    </section>
  )
};
