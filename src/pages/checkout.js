import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice'
// import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import  Currency  from 'react-currency-formatter'


const Checkout = () => {

    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const {data: session} = useSession()
    
  return (
    <div className=' bg-gray-100'>
      <Header />

      <main className=' lg:flex max-w-screen-xl mx-auto'>
        <div className=' flex-grow m-5 shadow-lg'>
            <Image src={'https://links.papareact.com/ikj'} height={250} width={1020} alt='' />

            <div className=' flex flex-col p-5 space-y-10 bg-white'>
                <h1 className=' text-2xl border-b pb-4'>{items.length? 'Your orders' : 'Your cart is empty'}</h1>

                {items?.map((item, i) => (
                    <CheckoutProduct 
                    key={item.id}
                    title = {item.title}
                    price = {item.price}
                    description = {item.description}
                    image = {item.image}
                    id = {item.id}
                    category = {item.category} 
                    />
                ))}
            </div>
            
        </div>

        <div className='flex flex-col bg-white p-10 shadow-lg'>
            {items.length > 0 && (
                <>
                    <p className='whitespace-nowrap'>
                        <h1>Subtotal ({items.length} items)</h1>
                    </p>
                    <p>
                        <Currency quantity={total*550} currency='NGN' />
                    </p>

                    <button disabled={!session} className={` mt-2 button ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'} `}>
                    {!session? 'Sign in to checkout' : 'proceed to checkout'}
                    </button>
                </>
                
            )}

            
        </div>
      </main>
    </div>
  )
}

export default Checkout
