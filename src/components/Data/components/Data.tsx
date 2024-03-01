import { dataItems } from '../utils/dataItems';

export const Data = () => {
  return (
    <section className="mt-16 pl-20 bg-black gap-32 flex items-center justify-center md:h-44 md:pl-0 xl:h-52 2xl:gap-52">
      {dataItems.map((item, index) => (
        <div
          key={index}
          className="text-center"
        >
          <h2 className="mb-2 font-bold text-white text-3xl lg:mb-4 md:text-[3vw]">{item.number}</h2>
          <p className="font-medium text-[#AEAEAE] text-xl xl:text-2xl">{item.description}</p>
        </div>
      ))}
    </section>
  )
}