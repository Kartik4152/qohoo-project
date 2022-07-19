import React from 'react';
import image1 from './assets/Clothing/Page1/3_transparent.png';
import Item from './components/Item/Item';
import bag from './assets/Accesories/bag.png';
import shoes from './assets/Accesories/shoes.png';
import {AiOutlinePlus} from 'react-icons/ai';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';

const Landing = () => {
  return (
    <div className='w-full h-full pt-28 flex items-center justify-center '>
      {/* girl and center blob */}
        <div className='flex justify-center h-full w-full items-center'>
            <div className='rounded-full h-[34rem] w-[34rem] bg-[#d5e2ae] bg-opacity-70 absolute'></div>
            <img src={image1} className='object-contain h-[40rem] z-10 self-end' alt=""/>
        </div>
        {/* title text */}
        <div className='absolute flex flex-col left-[22%] z-20 -tracking-[0.2rem]'>
            <span className='text-5xl'>TIED GREEN</span>
            <span className='text-5xl'>V-NECK SHIRT</span>
        </div>
        {/* accessories */}
        <div className='absolute flex flex-col justify-center right-[20%] z-20'>
            <Item title="Medium Crossbody Bag" image={bag} price={54}/>
            <Item title="High Heel Sandals" image={shoes} price={89}/>            
        </div>
        {/* plus button */}
        <div className='h-12 w-12 rounded-full absolute bg-black z-20 text-white flex justify-center items-center text-xl text-opacity-80 -translate-x-14 cursor-pointer'>
          <AiOutlinePlus />
        </div>
        {/* socials */}
        <div className='flex gap-6 text-2xl absolute bottom-8 left-16'>
          <div className='border-[2px] border-opacity-50 border-[#b0a7a4] p-2 rounded-lg cursor-pointer'>
          <FaFacebookF />
          </div>
          <div className='border-[2px] border-opacity-50 border-[#b0a7a4] p-2 rounded-lg cursor-pointer'>
          <FaInstagram />
          </div>
          <div className='border-[2px] border-opacity-50 border-[#b0a7a4] p-2 rounded-lg cursor-pointer'>
          <FaTwitter />
          </div>
        </div>
    </div>
  )
}

export default Landing;