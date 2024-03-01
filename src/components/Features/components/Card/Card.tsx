import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  index: number
  item: {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element;
  }
}

export const Card = ({ index, item }: CardProps) => {
  return (
    <div
      key={index}
      className="px-4 flex justify-center items-center flex-col max-w-80 min-h-72 xl:h-80 text-white bg-[#2F2F2F] hover:bg-[#B8FF5C] hover:text-black ease-in duration-300 sm:w-96 md:p-6 xl:w-96 xl:h-72 rounded-2xl lg:justify-start lg:items-start"
    >
      <h2 className="mt-4 flex items-center gap-4 font-bold text-[20px] lg:text-xl">
        <span className='text-base'>{item.icon}</span>
        {item.title}
      </h2>
      <p className="mt-4 h-20 md:h-32 text-center font-medium text-[16px] lg:text-xl lg:text-left">
        {item.description}
      </p>
      <button className='p-3 mt-6 self-start flex items-center gap-3 font-bold'>
        Saiba mais
        <FontAwesomeIcon icon={faArrowRight} size='sm' />
      </button>
    </div>
  );
};