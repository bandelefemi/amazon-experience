import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import  Currency  from 'react-currency-formatter'

const Product = ({id, title, price, description, category, image}) => {


    const [rating] = useState(
        Math.floor(Math.random() * (5 - 1 + 1)) + 1
    )
  return (
    <div className=' relative flex flex-col m-5 bg-white z-30 p-10 '>

      <p className=' absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <div className='mx-auto'>
        <Image src={image} height={200} width={200} className=" min-h-[200px] min-w-[200px] object-contain" />

      </div>

      <h4 className=' my-3 '>{title}</h4>

      <div className=' flex text-yellow-300'>
        {Array(rating).fill().map((_,i)=> (

                  <StarIcon className='h-5' />

        ))}
      </div>

      <p className=' text-xs my-2 line-clamp-2'>{description}</p> 

      <div className=' mb-5'>
        <Currency quantity={price * 560} currency='NGN' />
      </div>  

      <button className=' mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product
