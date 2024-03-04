import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CTAButton } from '../../../CTAButton/CTAButton';

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
    <div className="w-full h-2/5 flex justify-center items-center lg:w-1/2 lg:h-full lg:justify-end">
      <div className='flex justify-start flex-col items-start w-2/3'>
        <h1 className='text text-left text-4xl font-bold mb-1 w-full relative p-1 md:text-[4vw] md:mb-6 md:leading-none'>
          O melhor jeito de gerenciar seu dinheiro
        </h1>
        <h2 className='text-stone-600 text text-left text-xl font-regular mb-6 w-full p-1 md:text-2xl md:mb-8'>
          Transforme sua relação com o dinheiro. Ganhe controle total sobre suas finanças com nossa plataforma intuitiva e eficiente.
        </h2>
        <CTAButton />
      </div>
    </div>
  );
}