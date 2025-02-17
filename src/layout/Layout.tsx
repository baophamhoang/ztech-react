import NavigationButton from '@components/NavigationButton';
import AboutUs from '@containers/AboutUs';
import Footer from '@containers/Footer';
import Hero from '@containers/Hero';
import Navbar from '@containers/Navbar';
import OurGames from '@containers/OurGames';
import OurPartners from '@containers/OurPartners';
import { Suspense } from 'react';

function Layout() {
  return (
    <>
      <Suspense fallback={<div className="">Loading...</div>}>
        <Navbar />
        <Hero />
        <AboutUs />
        <OurGames />
        <OurPartners />
        <Footer />

        <NavigationButton />
      </Suspense>
    </>
  );
}

export default Layout;
