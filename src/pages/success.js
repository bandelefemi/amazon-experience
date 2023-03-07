import { CheckCircleIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'

const success = () => {

    const router = useRouter()
  return (
    <div className=' bg-gray-200 h-screen'>
      <Header />

      <main className=' bg-white max-w-screen-lg mx-auto'>
        <div className=' flex flex-col p-10'>
            <div className=' flex items-center space-x-2 mb-6 '>
                 <CheckCircleIcon className='text-green-500 h-10' />
                <h1 className=' text-2xl'>Thank you! Your order has been placed!</h1>
            </div>
            <p>
                Thanks for your order. We will send a confirmation once your order is shipped. If you will like to know tthe status of your order, hit the buttton below
            </p>
            <button onClick={()=> router.push('/orders')} className=' button mt-10'>View my orders</button>
        </div>
      </main>
    </div>
  )
}

export default success
