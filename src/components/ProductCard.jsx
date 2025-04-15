import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'


export default function ProductCard({item}) {
const {addToCart} = useContext(CartContext)

  return (
    <div className='m-5  w-1/4 h-80 flex flex-col justify-center shadow-xl/30 rounded-xl px-2 pb-2 bg-gray-800 '>
        <img className='w-[150px] ml-20' src={item.imgUrl} alt="" />
        <h1 className='font-semibold text-2xl '>{item.name}</h1>
        <h3 className='text-xl'>₹{item.price}</h3>
        <p className='text-sm'>{item.desc}</p>
        <div className='w-full flex justify-around itemc mt-2'>
            <button onClick={()=> addToCart(item)} className='border px-2 rounded bg-gray-600 text-white transition-all ease-out hover:scale-105 cursor-pointer hover:bg-gray-800'>Add to Cart</button>
        </div>
    </div>
  )
}
