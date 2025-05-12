import React from 'react'
import ProductCard from './ProductCard'

export default function Shop() {
  const products = [
    {imgUrl:'..AddToCart/iPhone7.png', name:'iPhone7', price:'67,000', desc:'best performance'},
    {imgUrl:'..AddToCart/iPhone16.png', name:'iPhone16', price:'72,900', desc:'7th Gen performance'},
    {imgUrl:'..AddToCart/samsungUltra25.png', name:'Samsung Galaxy s25 Ultra', price:'72,900', desc:'7th Gen performance'},
    {imgUrl:'..AddToCart/nothing3a.png', name:'Nothing 3a', price:'35,000', desc:'Awesome Camera and look'},
    {imgUrl:'..AddToCart/nothing2a.png', name:'Nothing 2a', price:'22,000', desc:'Long lasting Battery'},
    {imgUrl:'..AddToCart/cmf.png', name:'CMF', price:'15,000', desc:'Better UI and Look'}
  ]
  return (
    <section className='w-screen  bg-gray-900 text-white'>
            <div className='w-full h-10 flex items-center justify-between bg-gray-800 px-5 '>
                <h1 className='font-bold text-xl'>The Kayank Show</h1>
                <div className='flex gap-10'>
                    <h1 className='border px-1 rounded border-gray-500 bg-gray-900 transition-all ease-out hover:scale-105 cursor-pointer'>Home</h1>
                    <h1 className='border px-1 rounded border-gray-500 bg-gray-900 transition-all ease-out hover:scale-105 cursor-pointer'>Order</h1>
                    <h1 className='border px-1 rounded border-gray-500 bg-gray-900 transition-all ease-out hover:scale-105 cursor-pointer'>What's new</h1>
                    <h1 className='border px-1 rounded border-gray-500 bg-gray-900 transition-all ease-out hover:scale-105 cursor-pointer'>Cart</h1>
                </div>
            </div>
            <div className=' py-5 flex flex-col gap-10 '>

              <div className='flex w-full justify-around items-center flex-wrap'>
                {products.map((item,index)=>(
                  <ProductCard key={index} item={item}/>
                ))}
              </div>
               
          
            </div>
    </section>
  )
}
