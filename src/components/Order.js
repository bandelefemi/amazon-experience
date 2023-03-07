import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'

const Order = ({id, amount, items, timestamp, images}) => {
  return (
    <div className=' relative border rounded-md'>
      <div className=' flex items-center space-x-10 p-5 bg-gray-200 text-sm text-gray-700'>
        <div>
            <p className=' font-bold text-xs'>ORDER PLACED</p>
            <p>{moment.unix(timestamp).format("DD MMM, YYYY")}</p>
        </div>
        <div>
            <p className=' font-bold text-xs'>Total</p>
            <p>
                <Currency quantity={amount * 550} currency='NGN' />
            </p>
        </div>

        <p className=' text-xs sm:text-lg self-end text-right text-blue-400 flex-1'>
            {items.length} Items
        </p>
        <p className=' absolute top-2 right-2 w-36 truncate text-xs whitespace-nowrap'>
            ORDER # {id}
        </p>
      </div>
      <div className=' p-5 sm:p-10'>
        <div className=' flex space-x-5 overflow-x-auto'> 
            {images.map((item) => (
                <img key={''} src={item} className="h-20 object-contain sm:h-32" />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Order
