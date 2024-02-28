import { Cards } from './components/Cards/Cards';

export const Features = () => {
  // const textRef = useRef<HTMLDivElement>(null);


  // useEffect(() => {
  //   const textElement = textRef.current!;
  //   const letters = textElement.querySelectorAll<HTMLSpanElement>('span');

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: textElement,
  //       start: 'top 80%',
  //       end: 'bottom 20%',
  //       scrub: true
  //     }
  //   });

  //   letters.forEach((letter: HTMLSpanElement, index: number) => {
  //     tl.fromTo(letter,
  //       {
  //         opacity: 0,
  //         y: 'random(-100, 100)',
  //         x: 'random(-100, 100)'
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         x: 0,
  //         duration: 1,
  //         ease: 'back.out(1.0)',
  //         stagger: 0.1
  //       }, index * 0.05);
  //   });
  // }, []);

  return (
    <section className="p-8 flex flex-col items-center justify-center bg-black">
      <h2 className="my-16 max-w-4xl text-center text-white font-bold text-4xl leading-10 lg:my-24 lg:text-7xl ">
        Conheça nossas funcionalidades
      </h2>
      <Cards />
    </section>
  );
}
