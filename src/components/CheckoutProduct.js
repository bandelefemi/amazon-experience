import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

const CheckoutProduct = ({id, title, price, description, category, image}) => {

    const dispatch = useDispatch()

    const removeItemFromBasket =()=> {
        // const product = {id}
        dispatch(removeFromBasket({id}))
    }

    const addItemToBasket =()=> {
        const product = {id, title, price, description, category, image}
        dispatch(addToBasket(product))
    }
  return (
    <div className=' grid grid-cols-5'>
        <Image src={image} width={150} height={150} alt='' />

        <div className='flex flex-col col-span-3 mx-5 space-y-3' >
            <p className=' font-semibold'>{title}</p>
            <p className=' text-xs line-clamp-2'>{description}</p>
            <p>
            <Currency quantity={price * 550} currency='NGN' />
            </p>
        </div>
        <div className=' flex flex-col mx-auto justify-self-end space-y-3'>
            <button onClick={addItemToBasket} className='button'>
                Add to cart
            </button>
            <button onClick={removeItemFromBasket} className='button'>
                Remove from cart
            </button>
        </div>
    </div>
  )
}

export default CheckoutProduct
