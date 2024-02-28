import { Advantages } from '../components/Advantages/Advantages';
import { Banner } from '../components/Banner/Banner'
import { Data } from '../components/Data/Data';
import { Features } from '../components/Features/Features';

export const LandingPage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Banner />
      <Data />
      <Advantages />
      <Features />
    </div>
  )
};