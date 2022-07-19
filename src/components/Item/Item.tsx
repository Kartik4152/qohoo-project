import React from 'react'

const Item = ({title, image, price, className}: {title: string, image: string , price: number, className: string}) => {
  return (
    <div className={`rounded-3xl bg-white flex justify-between py-4 pl-4 h-36 w-56 shadow-sm m-4 overflow-hidden ${className}`}>
        <div className='flex flex-col justify-between flex-1'>
          <div className='flex flex-col font-normal'>
          {title.split(' ').map((e,index)=><span key={index}>{e}</span>)}
          </div>
          <span>${price}</span>
        </div>
        <div className='flex justify-end translate-x-4 translate-y-4'>
          <img src={image} alt="product" className='object-contain '/>
        </div>
    </div>
  )
}

export default Item