import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'

const Checkout = () => {
  return (
    <div className=' bg-gray-100'>
      <Header />

      <main className=' lg:flex max-w-screen-xl mx-auto'>
        <div className=' flex-grow m-5 shadow-lg'>
            <Image src={'https://links.papareact.com/ikj'} height={250} width={1020} />

            <div className=' flex flex-col p-5 space-y-10 bg-white'>
                <h1 className=' text-2xl border-b pb-4'>Your shopping basket</h1>
            </div>
        </div>

        <div>
            right
        </div>
      </main>
    </div>
  )
}

export default Checkout
