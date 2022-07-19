import React,{useRef, useEffect} from 'react';
import {BsSuitHeart, BsPerson} from 'react-icons/bs';
import {FiShoppingBag} from 'react-icons/fi';
import Logo from '../../assets/logo.png';
import {gsap, Power1} from 'gsap';

const Navbar = () => {
  const hamburgBar1 = useRef(null);
  const hamburgBar2 = useRef(null);
  const timeline = useRef(gsap.timeline({defaults:{duration: 0.5}}));
  useEffect(()=>{
    timeline.current.to(hamburgBar1.current, {delay:0.4 ,width:"2rem", ease:Power1.easeOut}).to(hamburgBar2.current, {width:"1rem", ease:Power1.easeOut});
  },[]);
  return (
    <nav className='w-full flex justify-between border-b-[1px] border-opacity-30 border-[#b0a7a4] h-20 fixed'>
        <div className='flex items-center px-8'>
            <div className='w-8'>
                <div ref={hamburgBar1} className='w-0 h-[2px] bg-black rounded-sm mb-[6px]'></div>
                <div ref={hamburgBar2} className='w-0 h-[2px] bg-black rounded-sm'></div>
            </div>
        </div>
        <div className='flex items-center px-8 border-l-[1px] border-opacity-30 border-[#b0a7a4] text-4xl'>
            <img src={Logo} alt="logo" className='object-cover h-6'/>
        </div>
        <div className='flex items-center border-l-[1px] border-opacity-30 border-[#b0a7a4] gap-8 px-8 flex-1'>
            <div className='h-full flex items-center uppercase font-bold cursor-pointer border-transparent hover:border-[#B17075] border-b-2'>New</div>
            <div className='h-full flex items-center uppercase font-bold cursor-pointer border-transparent hover:border-[#B17075] border-b-2'>Sale</div>
            <div className='h-full flex items-center uppercase font-bold cursor-pointer border-transparent hover:border-[#B17075] border-b-2'>Man</div>
            <div className='h-full flex items-center uppercase font-bold cursor-pointer border-transparent hover:border-[#B17075] border-b-2'>Women</div>
        </div>
        <div className='flex items-center justify-center px-8 border-l-[1px] border-opacity-30 border-[#b0a7a4] flex-1'>
            <div className='h-fit w-fit flex justify-center items-center'>
                <div className='absolute w-[0.75rem] h-[0.75rem] bg-black text-white rounded-full text-[0.5rem] flex items-center justify-center -translate-y-2 translate-x-2'>3</div>
                <BsSuitHeart />
            </div>
            <div className='uppercase font-bold ml-4'>Search</div>
        </div>
        <div className='flex items-center px-16 border-l-[1px] border-opacity-30 border-[#b0a7a4] gap-8'>
            <FiShoppingBag className='text-xl'/>
            <BsPerson className='text-2xl'/>
        </div>
    </nav>
  )
}

export default Navbar