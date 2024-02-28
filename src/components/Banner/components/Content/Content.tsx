import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Content = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    if (!text) return;

    const tl = gsap.timeline({ defaults: { duration: 0.5 } });

    tl.fromTo(
      text,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, stagger: 0.1, ease: 'back.out(1.7)' }
    ).to(
      text,
      {
        duration: 1,
        delay: 0.5,
        morphSVG: {
          shape: 'M 0 0 Q 100 20 200 0 Q 300 20 400 0 Q 500 20 600 0 Q 700 20 800 0 Q 900 20 1000 0',
        },
        ease: 'power3.inOut'
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.text',
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
    <div className="select-none w-full h-2/5 flex justify-center items-center lg:w-1/2 lg:h-full lg:justify-end">
      <div className='flex justify-start flex-col items-start w-2/3'>
        <h1 className='text text-left text-4xl font-bold mb-1 w-full relative p-1 md:text-[5vw] md:mb-8 md:leading-none'>
          Tenha mais <span ref={textRef}>controle</span> do seu dinheiro
        </h1>
        <h2 className='text-stone-600 text text-left text-xl font-regular mb-6 w-full p-1 md:text-3xl md:mb-8'>
          Transforme sua relação com o dinheiro. Ganhe controle total sobre suas finanças com nossa plataforma intuitiva e eficiente.
        </h2>
        <button className="text relative inline-block px-8 py-3 text-white bg-black rounded-full shadow-lg">
          Comece agora
        </button>
      </div>
    </div>
  );
}