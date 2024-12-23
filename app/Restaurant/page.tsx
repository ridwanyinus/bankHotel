import Navbars from '@/components/Navbar';
import RestaurantHero from './RestaurantHero';
import RestaurantFooter from './RestaurantFooter';

const index = () => {
  return (
    <main className='bg-primary'>
      <Navbars />
      <RestaurantHero />
      <RestaurantFooter />
    </main>
  );
};

export default index;
