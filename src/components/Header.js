import React from 'react'
import Image from 'next/image'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <header>
      {/* top nav */}

      <div className=' flex items-center bg-amazon_blue p-1 py-2 flex-grow'>
        <div className='flex mt-2 items-center flex-grow sm:flex-grow-0 px-2'>
          <Image 
          
            src={'http://links.papareact.com/f90'}
            width={120}
            height={30}
            className=' object-contain cursor-pointer p-1' />
        </div>

        {/* search */}

        <div className=' hidden bg-yellow-400 hover:bg-yellow-500 sm:flex items-center h-10 rounded-md flex-grow cursor-pointer'>
          <input className=' p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
          <SearchIcon className='h-12 p-4' />
        </div>

        {/* right */}

        <div className=' text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className=' link'>
            <p>Hello, Femi</p>
            <p className=' font-extrabold md:text-s
            '>Account & Lists</p>
          </div>
          <div className=' link'>
            <p>Returns</p>
            <p className=' font-extrabold md:text-s
            '>Orders</p>
          </div>
          <div className=' link relative flex items-center'>
            <span className=' absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold'>0</span>
            <ShoppingCartIcon className='h-10' />
            <p className=' hidden md:inline mt-2 font-extrabold md:text-s
            '>Basket</p>
          </div>
        </div>
      </div>

      {/* bottom nav */}

      <div className=' flex items-center bg-amazon_blue-light p-2 space-x-5 text-white text-sm'>
        <p className=' link flex items-center'>
          <MenuIcon className=' h-6 mx-2'/>
          All
        </p>
        <p className=' link'> Prime Video </p>
        <p className=' link'> Become a Partner </p>
        <p className=' link'> Today's Deals </p>
        <p className=' link hidden lg:inline-flex'> Shop Kids </p>
        <p className=' link hidden lg:inline-flex'> Buy Again </p>
        <p className=' link hidden lg:inline-flex'> Shopper Toolkit </p>
        <p className=' link hidden lg:inline-flex'> Healtth & Personal Care </p>
        <p className=' link hidden lg:inline-flex'> Customer Service </p>


      </div>
    </header>
  )
}

export default Header
