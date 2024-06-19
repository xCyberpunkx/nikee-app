import React from 'react';
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons';
import  { navLinks } from '../constants';
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between max-container'>
        <a href="/" title="Home">
          <img src={headerLogo} alt="Logo" width={130} height={30} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => 
            (
            <li key={item.label}>
              <a href={item.href} className='font-monserrat leading-normal text-slate-600'>{item.label}</a>
            </li>
            ) )}
        </ul>
        <div className="hidden max-lg:block">
        <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;

