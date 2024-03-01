import { Advantages } from '../components/Advantages/Advantages';
import { Banner } from '../components/Banner/Banner'
import { CallToAction } from '../components/CallToAction/CallToAction';
import { DisplayData } from '../components/Data/DisplayData';
import { Features } from '../components/Features/Features';
import { Footer } from '../components/Footer/Footer';
import { GoToTopButton } from '../components/GoToTopButton/GoToTopButton';

export const LandingPage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Banner />
      <DisplayData />
      <Advantages />
      <Features />
      <CallToAction />
      <Footer />
      <GoToTopButton />
    </div>
  )
};