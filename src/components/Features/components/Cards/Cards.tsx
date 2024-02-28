import { cardsItems } from "../../utils/cardsItems";

export const Cards = () => {
  return (
    <div className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-12">
      {cardsItems.map((item, index) => (
        <div
          key={index}
          className="p-6 flex flex-col justify-center w-64 h-72 text-white bg-[#2F2F2F] hover:bg-[#B8FF5C] hover:text-black ease-in duration-300 xl:w-96 xl:h-72 rounded-2xl"
        >
          <span>{item.icon}</span>
          <h2 className="mt-4 font-bold text-xl">{item.title}</h2>
          <p className="mt-4 font-medium text-xl">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};