import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Header } from '../Header/Header';
import { Content } from './components/Content/Content';
import manFinances from '../../../public/assets/images/man-finances-computer-2.svg';

export const Banner = () => {
  useEffect(() => {
    gsap.fromTo(
      '.banner-image',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.4,
        },
      },
    );
  }, []);

  return (
    <main
      className="text-center"
      style={{ transform: `translateY(-${scrollY * 0.5}px)` }}
    >
      <Header />
      <div className='flex items-center justify-between flex-col lg:flex-row-reverse'>
        <img
          className='md:w-1/2 h-auto banner-image'
          src={manFinances}
          alt="Man managing his finances"
        />
        <Content />
      </div>
    </main>
  );
};