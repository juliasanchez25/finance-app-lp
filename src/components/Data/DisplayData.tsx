import Marquee from 'react-fast-marquee';
import { useScreenSize } from '../../hooks/useScreenSize';
import { Data } from './components/Data';

export const DisplayData = () => {
  const { isMobile, isDesktop } = useScreenSize();

  return (
    <>
      {isDesktop &&
        <Data />
      }
      {isMobile &&
        <Marquee className='mt-16 pb-[54px] bg-black'>
          <Data />
        </Marquee>
      }
    </>
  )
};
