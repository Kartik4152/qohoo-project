import React,{useRef, useEffect, useState} from 'react';
import {BsSuitHeart, BsPerson} from 'react-icons/bs';
import {FiShoppingBag} from 'react-icons/fi';
import Logo from '../../assets/logo.png';
import {gsap, Power1} from 'gsap';

const Navbar = () => {
  const hamburgBar1 = useRef(null);
  const hamburgBar2 = useRef(null);
  const logoRef = useRef(null);
  const timeline = useRef(gsap.timeline({defaults:{duration: 0.3}}));
  const [selectedTab, setSelectedTab] = useState("Women");
  useEffect(()=>{
    timeline.current.to(hamburgBar1.current, {delay:0.4 ,width:"2rem", ease:Power1.easeIn})
    .to(hamburgBar2.current, {width:"1rem", ease:Power1.easeIn})
    .to(logoRef.current, {opacity: 1, y:0, ease:Power1.easeIn}, 0.4)
    .to('.navlink', {opacity: 1, x:0, ease:Power1.easeIn, stagger:0.05}, '<0.1')
    .to('.navSearch > *', {opacity: 1, y:0, ease:Power1.easeIn})
    .to('.navIcons > *', {opacity:1, y:0, ease:Power1.easeIn});
  },[]);
  return (
    <nav className='w-full flex justify-between border-b-[1px] border-opacity-30 border-[#b0a7a4] h-20 fixed z-50'>
        <div className='flex items-center px-8'>
            <div className='w-8'>
                <div ref={hamburgBar1} className='w-0 h-[2px] bg-black rounded-sm mb-[6px]'></div>
                <div ref={hamburgBar2} className='w-0 h-[2px] bg-black rounded-sm'></div>
            </div>
        </div>
        <div className='flex items-center px-8 border-l-[1px] border-opacity-30 border-[#b0a7a4] text-4xl'>
            <img ref={logoRef} src={Logo} alt="logo" className='object-cover h-6 opacity-0 translate-y-2'/>
        </div>
        <div className='flex items-center border-l-[1px] border-opacity-30 border-[#b0a7a4] gap-8 px-8 flex-1'>
            <div className={`navlink h-full flex items-center uppercase font-bold cursor-pointer border-transparent hover:border-[#B17075] border-b-2 opacity-0 translate-x-2 ${selectedTab==="New" && 'border-[#B17075]'}`} onClick={(e)=>setSelectedTab((e.target as any).textContent)}>New</div>
            <div className={`navlink h-full flex items-center uppercase font-bold cursor-pointer border-transparent hover:border-[#B17075] border-b-2 opacity-0 translate-x-2 ${selectedTab==="Sale" && 'border-[#B17075]'}`} onClick={(e)=>setSelectedTab((e.target as any).textContent)}>Sale</div>
            <div className={`navlink h-full flex items-center uppercase font-bold cursor-pointer border-transparent hover:border-[#B17075] border-b-2 opacity-0 translate-x-2 ${selectedTab==="Man" && 'border-[#B17075]'}`} onClick={(e)=>setSelectedTab((e.target as any).textContent)}>Man</div>
            <div className={`navlink h-full flex items-center uppercase font-bold cursor-pointer border-transparent hover:border-[#B17075] border-b-2 opacity-0 translate-x-2 ${selectedTab==="Women" && 'border-[#B17075]'}`} onClick={(e)=>setSelectedTab((e.target as any).textContent)}>Women</div>
        </div>
        <div className='navSearch flex items-center justify-center px-8 border-l-[1px] border-opacity-30 border-[#b0a7a4] flex-1'>
            <div className='h-fit w-fit flex justify-center items-center opacity-0 translate-y-2'>
                <div className='absolute w-[0.75rem] h-[0.75rem] bg-black text-white rounded-full text-[0.5rem] flex items-center justify-center -translate-y-2 translate-x-2'>3</div>
                <BsSuitHeart />
            </div>
            <div className='uppercase font-bold ml-4 opacity-0 translate-y-2'>Search</div>
        </div>
        <div className='navIcons flex items-center justify-center w-80 border-l-[1px] border-opacity-30 border-[#b0a7a4] gap-8 z-50'>
            <FiShoppingBag className='text-xl opacity-0 translate-y-2 z-50'/>
            <BsPerson className='text-2xl opacity-0 translate-y-2 z-50'/>
        </div>
    </nav>
  )
}

export default Navbar