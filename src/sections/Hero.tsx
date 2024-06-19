import React from 'react'
import Button from '../components/Button'
import  {arrowRight} from '../assets/icons'
const Hero = () => {
  return (
    <section
    id="home"
    className='w-full flex justify-center items-center xl:flex-row flex-col min-h-screen max-container gap-10'
    >

      <div className="relative xl:w-2/5 flex flex-col justify-center items-center w-full max-xl:padding-x pt-28">
      
      <p className=''>
      Our SUmmer Collection
      <h1><span>The New Arrival</span><br /> <span>Nike </span>Shoes</h1><p>Discover Tylish Nike Arrivals, Quality comfort, and innovation for your active life</p>
      </p>
      <Button label="Shop now" iconUrl={arrowRight}/>
      </div>
    </section>
  )
}

export default Hero