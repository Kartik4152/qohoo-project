import React, { Dispatch, SetStateAction, useRef } from 'react';

import {BsChevronRight} from 'react-icons/bs';


const Selector = ({images, selectImage}:{images:string[][], selectImage: Dispatch<SetStateAction<string[]>>}) => {
  const lastImageRef = useRef(null);
  return (
    <div id="imgSelector" className='flex-col relative hidden'>
        <div className='uppercase opacity-0 translate-x-8'>
            Select Size
        </div>
        <div className='flex gap-4 mt-4 items-center'>
            <div className="rounded-full h-12 w-12 bg-transparent flex justify-center items-center border-[#b0a7a4] border-[1px] border-opacity-50 hover:border-black cursor-pointer opacity-0 scale-0 origin-bottom-right translate-x-8">S</div>
            <div className="rounded-full h-12 w-12 bg-transparent flex justify-center items-center border-[#b0a7a4] border-[1px] border-opacity-50 hover:border-black cursor-pointer opacity-0 scale-0 origin-bottom-right translate-x-8">M</div>
            <div className="rounded-full h-12 w-12 bg-transparent flex justify-center items-center border-[#b0a7a4] border-[1px] border-opacity-50 hover:border-black cursor-pointer opacity-0 scale-0 origin-bottom-right translate-x-8">L</div>
            <div className='uppercase text-[#b0a7a4] hover:text-black cursor-pointer opacity-0 scale-0 origin-bottom-right translate-x-8'>Size Guide</div>
        </div>
        <div className='flex gap-4 items-center mt-4 w-[36rem] scroll-smooth overflow-auto snap-x snap-mandatory hide-scrollbar'>
            {images.map((e,index)=><div key={index} className='h-56 shrink-0 w-fit overflow-hidden bg-white relative translate-x-8 -translate-y-8 opacity-0 scale-50'>
                <img ref={index===images.length-1?lastImageRef:null} src={e[0]} onClick={()=>{selectImage(e)}} alt="carousel" className='object-contain h-full scale-100 hover:scale-150 hover:opacity-70 origin-top transition-all'/>
            </div>)}
            <div className='absolute -right-8'>
                <BsChevronRight className='cursor-pointer text-2xl' onClick={()=>(lastImageRef.current as any).scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' })}/>
            </div>
        </div>
    </div>
  )
}

export default Selector