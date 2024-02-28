import { Advantages } from '../components/Advantages/Advantages';
import { Banner } from '../components/Banner/Banner'
import { DisplayData } from '../components/Data/DisplayData';
import { Features } from '../components/Features/Features';

export const LandingPage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Banner />
      <DisplayData />
      <Advantages />
      <Features />
    </div>
  )
};