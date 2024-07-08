import React from 'react';
import { Hero,PopularProduct,HighQuality,Services,SpecialOffers,Subscribe,Footer,CustomerReviews } from './sections';
import Nav from './components/Nav'
const App = () => {
  return (
    <>
   <main>
    <Nav/> todo
    <section className='relative xl:padding-1 wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='padding'>
      <PopularProduct/>
      </section>
    <section className='padding'>
      <HighQuality/>
      </section>
    <section className='padding-x py-10'>
      <Services/>
      </section>
    <section className='padding'>
      <SpecialOffers/>
      </section>
    <section className='padding bg-pale-blue'>
      <CustomerReviews/>
      </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe/>
      </section>
    <section className='padding-x padding-t pb-8 bg-black'>
      <Footer/>
      </section>
   </main>
    </>
  );
};

export default App;
