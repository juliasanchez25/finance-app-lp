import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { advantagesItems } from './utils/advantagesItems';

gsap.registerPlugin(ScrollTrigger);

export const Advantages = () => {
  useEffect(() => {
    gsap.utils.toArray('.advantage').forEach((advantage, index) => {
      gsap.to(advantage as HTMLElement, {
        opacity: 1,
        duration: 1,
        delay: index * 0.3,
        scrollTrigger: {
          trigger: advantage as HTMLElement,
          start: 'top bottom',
          once: true,
        },
      });
    });
  })

  return (
    <section className='py-16 px-8 flex flex-col items-center justify-around xl:flex-row xl:p-32 lg:ml-20'>
      <div className='text-center lg:mb-16 xl:text-left'>
        <h2 className='mb-4 font-bold text-4xl lg:text-5xl'>Vantagens</h2>
        <p className='text-stone-600 font-normal max-w-sm text-xl lg:text-2xl'>
          Nós ouvimos nossos usuários e trabalhamos juntos para evoluir cada vez mais nossa plataforma.
        </p>
      </div>
      <div className='mt-8 flex flex-col justify-center gap-8 xl:mt-0 lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-16'>
        {advantagesItems.map((item, index) => (
          <div
            className='text-center advantage opacity-0 lg:text-left'
            key={index}
          >
            <div className='flex items-center justify-center lg:justify-start gap-4'>
              {item.icon}
              <h3 className='font-bold text-xl lg:text-2xl'>{item.title}</h3>
            </div>
            <p className='max-w-96 text-stone-600 text-lg lg:mt-3 lg:text-xl'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}