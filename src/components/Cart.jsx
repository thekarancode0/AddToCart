import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
export default function Cart() {
    const {product} = useContext(CartContext)
    console.log(product)
  return (
    <div className=' bg-gray-900 text-white'>
        <h1 className='text-center font-bold text-2xl'>Cart</h1>
        <div className='flex flex-col  items-center gap-5 border rounded border-gray-500 px-5 py-1'>
       
          {product.map((item, index) => (
            <div key={index} className='flex w-full h-20 justify-around items-center p-5 border rounded bg-gray-700 shadow-2xl/30'>
             {<img className='w-14' src={item.imgUrl}/>}
            {<h1>{item.name}</h1>}
            {<h1>₹{item.price}</h1>}
            {<p>{item.desc}</p>}
            </div>
          ))}
    
        </div>
    </div>
  ) 
}
