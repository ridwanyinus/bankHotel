import React from 'react';
import Navbars from '@/components/Navbar';
import RestaurantHero from './RestaurantHero';
import RestaurantFooter from './RestaurantFooter';

export const metadata = {
  title: 'Restaurant Bank Hotel - Bank Hotel Website by Ridwan',
};

const page = () => {
  return (
    <main className='bg-primary'>
      <Navbars />
      <RestaurantHero />
      <RestaurantFooter />
    </main>
  );
};

export default page;
