import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { Card } from './components/Card/Card';
import { useScreenSize } from '../../hooks/useScreenSize';
import { cardsItems } from './utils/cardsItems';
import { Title } from './components/Title/Title';

export const Features = () => {
  const { isMobile, isDesktop } = useScreenSize();

  return (
    <>
      {isDesktop && (
        <section className="p-8 flex flex-col items-center justify-center bg-black">
          <Title />
          <div className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-12">
            {cardsItems.map((item, index) => (
              <Card
                item={item}
                index={index}
              />
            ))}
          </div>
        </section>
      )}
      {isMobile && (
        <section className='py-16 bg-black'>
          <Title />
          <Swiper
            slidesPerView={1}
            centeredSlides
            className='bg-black mt-12 pb-16'
            modules={[Pagination]}
            pagination={{ clickable: true }}
            style={{
              '--swiper-pagination-color': '#FFFFFF',
              '--swiper-pagination-bullet-inactive-color': '#999999',
              '--swiper-pagination-bullet-inactive-opacity': '1',
            }}
          >
            {cardsItems.map((item, index) => (
              <SwiperSlide>
                <div className='flex justify-center items-center'>
                  <Card
                    item={item}
                    index={index}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </>
  );
}
