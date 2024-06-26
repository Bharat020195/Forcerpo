import React from 'react';
import Link from 'next/link';

const Header1 = () => {
 


  return (
    <div className='py-10 px-20 lg:flex hidden justify-between'>
      <div>
        <ul className='text-blue-900 flex  space-x-10 font-bold '>
          <Link href='/'> <li className='hover:text-blue-500'>Home</li></Link>
          <Link href='/about'> <li className='hover:text-blue-500'>About</li></Link>
          <Link href='/services'><li className='hover:text-blue-500'>Services</li></Link>
          <Link href='/contact'><li className='hover:text-blue-500'>Contact Us</li></Link>
        </ul>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default Header1;
