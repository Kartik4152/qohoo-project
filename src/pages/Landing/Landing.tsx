/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useCallback, useState, SetStateAction} from 'react';

import image1_transparent from '../../assets/Clothing/Page1/3_transparent.png';
import image1 from '../../assets/Clothing/Page1/3.jpg';

import image2_transparent from '../../assets/Clothing/Page1/1_transparent.png';
import image2 from '../../assets/Clothing/Page1/1.jpg';

import image3_transparent from '../../assets/Clothing/Page1/5_transparent.png';
import image3 from '../../assets/Clothing/Page1/5.jpg';

import image4_transparent from '../../assets/Clothing/Page1/4_transparent.png';
import image4 from '../../assets/Clothing/Page1/4.jpg';

import image5_transparent from '../../assets/Clothing/Page1/2_transparent.png';
import image5 from '../../assets/Clothing/Page1/2.jpg';


import Item from '../../components/Item/Item';
import bag from '../../assets/Accesories/bag.png';
import shoes from '../../assets/Accesories/shoes.png';
import page2img from '../../assets/Clothing/Page2/1_cropped.jpg';
import arrow3 from '../../assets/arrows/a3.png';
import arrow5 from '../../assets/arrows/a5.png';
import arrow8 from '../../assets/arrows/a8.png';
import arrow9 from '../../assets/arrows/a9.png';
import {AiOutlinePlus} from 'react-icons/ai';
import {SiPluscodes} from 'react-icons/si';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import {BsChevronRight, BsChevronUp} from 'react-icons/bs';
import {gsap, Power1, Power0, Bounce} from 'gsap';

import Selector from '../../components/Selector/Selector';


const Landing = () => {
  const girlRef = useRef(null);
  const circleBlob = useRef(null);
  const circleBlob2 = useRef(null);
  const plusButton = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);
  const sidebar = useRef(null);
  const sidebarImage = useRef(null);
  const sidebarText = useRef(null);
  const addButton = useRef(null);
  const images = useRef([[image1,image1_transparent],[image2,image2_transparent],[image3,image3_transparent],[image4,image4_transparent],[image5,image5_transparent]]);
  const timeline = useRef(gsap.timeline({defaults:{duration:0.6}}));
  const expandTimeline = useRef(gsap.timeline({defaults:{duration: 0.6}}));

  const [selectedImage, setSelectedImage] = useState([image1, image1_transparent]);

  const switchImage=(val: SetStateAction<string[]>)=>{
    setSelectedImage(val);
    gsap.fromTo(girlRef.current, {x:"42rem",opacity:0,ease:Power1.easeOut}, {x:"36rem",opacity:1,ease:Power1.easeOut});
  }

  const reverseExpansion = useCallback(()=>{
    expandTimeline.current.reverse();
    timeline.current.play();
  },[])

  const expand = useCallback(()=>{
    timeline.current.pause();
    expandTimeline.current.play();
    expandTimeline.current.to(sidebar.current, {x:"24rem", opacity:0, ease:Power1.easeOut})
    .to(girlRef.current, {x:"36rem", ease:Power1.easeOut},'<')
    .to(circleBlob.current, {x:"40rem", ease:Power1.easeOut},'<')
    .to(circleBlob2.current, {x:"40rem", ease:Power1.easeOut},'<.025')
    .to(plusButton.current, {scale: 0, opacity:0, display:'none', ease:Power1.easeInOut},'<')
    .to('.accessories > div > div', {opacity: 0, y: "9rem", scale:0, display:'none', ease:Power1.easeOut, stagger:0.1}, '<')
    .to('.socials > div', {opacity:0, x:0, scale:0, display:'none', ease:Power1.easeOut, stagger:0.1}, '<')
    .to('.arrow', {scale: 0, opacity:0, rotateX:"12deg", display:'none', ease:Bounce.easeInOut, stagger:0.1},'<')
    .to('.rotatePlus', {opacity:0, display:'none', ease:Power0.easeIn},'<')
    .to(text1.current, {y:"-16rem", ease:Power1.easeIn}, '<')
    .to(text2.current, {y:"-16rem", ease:Power1.easeIn},'<.1')
    .to(text3.current, {display:'block', opacity: 1, y:"-16rem",ease:Power1.easeIn}, '<.2')
    .to(text4.current, {display:'block', opacity: 1, y:"-16rem",ease:Power1.easeIn}, '<.2')
    .to(addButton.current, {display:'flex', scale:1 ,ease:Bounce.easeOut},'<')
    .to('#imgSelector', {display: 'flex'}, '<')
    .to('#imgSelector > div:nth-child(1)', {opacity: 1, x:0,ease:Power1.easeIn, duration:0.3}, '<.4')
    .to('#imgSelector > div:nth-child(2) > *', {opacity: 1, x:0, scale:1, ease:Power1.easeIn, duration:0.3}, '<')
    .to('#imgSelector > div:nth-child(3) > div', {opacity: 1, x:0, y:0, scale:1, stagger:0.2, ease:Power1.easeOut}, '<')
    .to('.arrow2', {display:'block',scale: 1, opacity:1, rotation:360, duration:0.5, ease:Power1.easeOut, stagger:0.2},'<');
  }, []);

  const animateSVGText = useCallback(()=>{
    const paths: [SVGPathElement] = document.querySelectorAll("svg#sidebarText path") as any;
    (document.querySelector('svg#sidebarText') as SVGElement).style.opacity="1";
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        (path.style as any)["stroke-dashoffset"] = `${length}px`;
        (path.style as any)["stroke-dasharray"] = `${length}px`;
        (path.style as any)["stroke-width"] = "2px";
        (path.style as any)["stroke"] = "#000";
        (path.style as any)["animation"] = `2s svg-text-anim forwards linear`;
        (path.style as any)["animation-delay"] = `${i * 0.1}s`;
    }
  }, [])
  useEffect(()=>{
    timeline.current.play();
    expandTimeline.current.pause();
    timeline.current.to(girlRef.current, {delay:0.4, opacity:1, x:0, ease:Power1.easeOut})
    .to(circleBlob.current,{opacity:1, ease:Power1.easeIn},'<')
    .to(circleBlob2.current,{opacity:1, ease:Power1.easeIn}, '<')
    .to(text1.current, {opacity:1, x:0, ease:Power1.easeIn}, '<')
    .to(text2.current, {opacity:1, x:0, ease:Power1.easeIn},'<')
    .to('.socials > div', {opacity:1, x:0, scale:1, ease:Power1.easeOut, stagger:0.1}, '<')
    .to('.accessories > div > div', {opacity: 1, y: 0, ease:Power1.easeOut, stagger:0.1}, '<')
    .to('.arrow', {scale: 1, opacity:1, rotateX:0, ease:Bounce.easeInOut, stagger:0.1},'<')
    .to('.rotatePlus', {opacity:1, ease:Power0.easeIn},'<')
    .fromTo('.rotatePlus', {duration:2, rotation:"0", repeat:-1, ease:Power0.easeIn},{duration:2, rotation:"360", repeat:-1, ease:Power0.easeIn}, '<')
    .to(sidebar.current, {x:0, ease:Power1.easeOut, onComplete:animateSVGText},'<')
    .to(sidebarText.current, {x:0 , opacity:1, ease:Power1.easeOut}, '<.1')
    .to(sidebarImage.current, {height: '70%', opacity: 1, ease:Power1.easeOut}, '<.2')
    .to(plusButton.current, {scale: 1, ease:Power1.easeInOut});
  }, [])
  return (
    <div className='w-full h-full pt-28 flex items-center justify-center overflow-hidden pr-32 relative'>
        {/* girl and center blob */}
        <div ref={circleBlob} className='rounded-full h-[34rem] w-[34rem] bg-[#d5e2ae] bg-opacity-70 absolute opacity-0 translate-x-0'></div>
        <div ref={circleBlob2} className='rounded-full h-[34rem] w-[34rem] bg-[#e9f2cf] bg-opacity-70 absolute opacity-0 translate-x-0 rotate-45 scale-x-110'></div>
        <img ref={girlRef} src={selectedImage[1]} className='object-contain h-[calc(100%-6rem)] z-10 absolute bottom-0 -translate-x-96 opacity-0' alt=""/>
        {/* title text */}
        <div className='absolute flex flex-col left-[15%] z-20 -tracking-[0.2rem] w-[30rem] h-64 translate-y-20'>
            <span ref={text1} className='text-5xl -translate-x-20 opacity-0 translate-y-0'>TIED GREEN</span>
            <span ref={text2} className='text-5xl translate-x-20 opacity-0 translate-y-0'>V-NECK SHIRT</span>
            <div ref={text3} className='text-4xl font-normal mt-4 opacity-0 hidden tracking-normal translate-y-0'>
              $67
            </div>
            <div ref={text4} className='text-base font-normal mt-8 opacity-0 hidden tracking-normal translate-y-0'>
              <span>V-neck shirt with lapel collar. Long sleeves with cuffs.</span>
              <span>Front Tie at hem. Front button closure.</span>
            </div>
        </div>
        {/* Size/Image Selector */}
        <div className='absolute left-[15%] bottom-4 z-20'>
          <Selector images={images.current} selectImage={switchImage}/>
        </div>
        {/* Add Button */}
        <div ref={addButton} onClick={reverseExpansion} className='absolute h-24 w-24 top-[35%] right-[40%] bg-[#CE3E4A] rounded-full uppercase justify-center items-center text-white cursor-pointer hidden scale-0'>
          add
        </div>
        {/* accessories */}
        <div className='accessories absolute flex flex-col justify-center right-[30%] z-20 overflow-hidden'>
          <div className='h-fit w-fit overflow-hidden'>
            <Item className="opacity-0 translate-y-36 scale-100 origin-bottom-right" title="Medium Crossbody Bag" image={bag} price={54}/>
          </div>
          <div className='h-fit w-fit overflow-hidden'>
            <Item className="opacity-0 translate-y-36 scale-100 origin-bottom-right" title="High Heel Sandals" image={shoes} price={89}/>  
          </div>          
        </div>
        {/* plus button */}
        <div ref={plusButton} className='h-12 w-12 rounded-full absolute bg-black z-20 text-white flex justify-center items-center text-xl text-opacity-80 -translate-x-14 cursor-pointer scale-0 opacity-100' onClick={expand}>
          <AiOutlinePlus />
        </div>
        {/* socials */}
        <div className='socials flex gap-6 text-2xl absolute bottom-8 left-16'>
          <div className='border-[2px] border-opacity-50 border-[#b0a7a4] p-2 rounded-lg cursor-pointer scale-50 opacity-0 translate-x-12'>
          <FaFacebookF />
          </div>
          <div className='border-[2px] border-opacity-50 border-[#b0a7a4] p-2 rounded-lg cursor-pointer scale-50 opacity-0 translate-x-12'>
          <FaInstagram />
          </div>
          <div className='border-[2px] border-opacity-50 border-[#b0a7a4] p-2 rounded-lg cursor-pointer scale-50 opacity-0 translate-x-12'>
          <FaTwitter />
          </div>
        </div>
        {/* sidebar */}
        <div ref={sidebar} className='absolute top-0 right-0 translate-x-96 h-full w-80 z-10 bg-white border-[#b0a7a4] border-l-[1px] border-opacity-50 flex flex-col justify-center items-center'>
          <div className='h-14 w-14 rounded-full bg-white border-[1px] border-[rgb(153,69,95)] flex items-center justify-center -translate-x-1/2 top-1/2 left-0 -translate-y-1/2 cursor-pointer text-xl absolute'>
            <BsChevronRight color='rgb(153,69,95)'/>
          </div>
          <div ref={sidebarImage} className='h-1/4 absolute right-0 flex items-center justify-center opacity-50'>
            <div className='absolute rotate-90 -translate-x-24'>
              <svg id="sidebarText" width="486.975" height="56.251" viewBox="0 0 486.975 56.251" xmlns="http://www.w3.org/2000/svg" className='opacity-0'>
                  <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="2px" fill="none" style={{stroke:"#000", strokeWidth:"2px", fill:"transparent"}}>
                  <path d="M 0 40.501 L 11.25 40.501 A 5.776 5.776 0 0 0 11.623 42.617 A 5.182 5.182 0 0 0 13.388 44.888 A 7.398 7.398 0 0 0 15.819 46.072 Q 17.305 46.501 19.2 46.501 A 12.753 12.753 0 0 0 21.348 46.331 Q 22.521 46.13 23.462 45.692 A 6.255 6.255 0 0 0 24.713 44.926 A 5.118 5.118 0 0 0 26.676 41.168 A 7.232 7.232 0 0 0 26.7 40.576 A 6.399 6.399 0 0 0 26.239 38.121 A 6.022 6.022 0 0 0 25.2 36.451 Q 23.7 34.726 21 34.126 L 15.45 32.851 A 24.578 24.578 0 0 1 10.297 31.046 A 17.679 17.679 0 0 1 4.613 26.738 A 15.753 15.753 0 0 1 0.803 17.31 A 20.44 20.44 0 0 1 0.75 15.826 A 17.546 17.546 0 0 1 1.286 11.4 A 14.168 14.168 0 0 1 2.963 7.463 A 14.495 14.495 0 0 1 8.603 2.265 A 17.528 17.528 0 0 1 9.225 1.951 A 19.057 19.057 0 0 1 14.18 0.387 Q 16.349 0.001 18.815 0.001 A 19.412 19.412 0 0 1 18.825 0.001 A 27.528 27.528 0 0 1 24.188 0.492 Q 27.437 1.138 29.976 2.631 A 15.447 15.447 0 0 1 32.138 4.163 A 13.635 13.635 0 0 1 36.999 13.973 A 19.04 19.04 0 0 1 37.05 15.376 L 25.8 15.376 A 6.018 6.018 0 0 0 25.531 13.531 A 4.774 4.774 0 0 0 23.963 11.251 Q 22.506 10.061 20.036 9.815 A 13.721 13.721 0 0 0 18.675 9.751 A 11.446 11.446 0 0 0 16.806 9.893 Q 14.911 10.208 13.725 11.213 A 4.75 4.75 0 0 0 12.122 14.029 A 7.097 7.097 0 0 0 12 15.376 A 6.904 6.904 0 0 0 12.326 17.533 A 5.904 5.904 0 0 0 13.388 19.463 A 6.343 6.343 0 0 0 15.743 21.225 A 8.819 8.819 0 0 0 17.325 21.751 L 23.175 23.101 A 26.968 26.968 0 0 1 27.949 24.63 Q 31.798 26.3 34.2 29.063 Q 37.95 33.376 37.95 40.051 A 16.543 16.543 0 0 1 37.223 45.029 A 14.421 14.421 0 0 1 35.588 48.526 A 15.468 15.468 0 0 1 29.766 53.831 A 18.662 18.662 0 0 1 28.988 54.226 A 20.098 20.098 0 0 1 23.734 55.863 A 27.817 27.817 0 0 1 18.975 56.251 A 28.829 28.829 0 0 1 14.049 55.85 A 20.9 20.9 0 0 1 8.925 54.301 A 16.703 16.703 0 0 1 4.933 51.784 A 14.204 14.204 0 0 1 2.325 48.826 A 14.022 14.022 0 0 1 0.145 42.821 A 18.03 18.03 0 0 1 0 40.501 Z" id="0" vectorEffect="non-scaling-stroke"/>
                  <path d="M 45.975 39.451 L 45.975 0.751 L 57.225 0.751 L 57.225 39.376 A 10.802 10.802 0 0 0 57.41 41.443 Q 57.64 42.618 58.153 43.533 A 5.537 5.537 0 0 0 58.988 44.663 A 5.732 5.732 0 0 0 61.762 46.242 Q 62.687 46.48 63.787 46.499 A 11.097 11.097 0 0 0 63.975 46.501 A 8.698 8.698 0 0 0 66.044 46.268 A 5.903 5.903 0 0 0 68.925 44.663 A 5.924 5.924 0 0 0 70.355 42.171 Q 70.633 41.247 70.702 40.137 A 12.22 12.22 0 0 0 70.725 39.376 L 70.725 0.751 L 81.975 0.751 L 81.975 39.451 A 19.92 19.92 0 0 1 81.295 44.796 A 14.684 14.684 0 0 1 77.138 51.713 Q 72.413 56.144 64.363 56.248 A 30.104 30.104 0 0 1 63.975 56.251 Q 55.65 56.251 50.813 51.751 A 14.837 14.837 0 0 1 46.297 43.253 A 21.516 21.516 0 0 1 45.975 39.451 Z" id="1" vectorEffect="non-scaling-stroke"/>
                  <path d="M 99.9 55.501 L 89.625 55.501 L 89.625 0.751 L 102.3 0.751 L 107.325 18.001 Q 107.957 20.068 108.347 21.739 A 35.879 35.879 0 0 1 108.563 22.726 A 74.047 74.047 0 0 1 108.747 23.66 Q 108.968 24.819 109.036 25.437 A 7.154 7.154 0 0 1 109.05 25.576 Q 109.119 24.816 109.474 23.038 A 87.155 87.155 0 0 1 109.538 22.726 A 52.789 52.789 0 0 1 109.894 21.112 Q 110.105 20.222 110.367 19.229 A 98.855 98.855 0 0 1 110.7 18.001 L 115.65 0.751 L 128.325 0.751 L 128.325 55.501 L 118.05 55.501 L 118.05 40.501 A 202.492 202.492 0 0 1 118.153 34.15 A 233.636 233.636 0 0 1 118.238 31.838 Q 118.425 27.301 118.725 22.801 A 329.84 329.84 0 0 1 119.044 18.441 A 270.948 270.948 0 0 1 119.4 14.363 A 1264.223 1264.223 0 0 1 119.671 11.552 Q 119.888 9.329 120.075 7.501 L 113.775 32.251 L 104.25 32.251 L 97.65 7.501 A 132.586 132.586 0 0 1 97.931 9.735 Q 98.166 11.724 98.4 14.138 Q 98.775 18.001 99.113 22.463 Q 99.45 26.926 99.675 31.576 A 190.906 190.906 0 0 1 99.886 38.34 A 167.861 167.861 0 0 1 99.9 40.501 L 99.9 55.501 Z" id="2" vectorEffect="non-scaling-stroke"/>
                  <path d="M 144.9 55.501 L 134.625 55.501 L 134.625 0.751 L 147.3 0.751 L 152.325 18.001 Q 152.957 20.068 153.347 21.739 A 35.879 35.879 0 0 1 153.563 22.726 A 74.047 74.047 0 0 1 153.747 23.66 Q 153.968 24.819 154.036 25.437 A 7.154 7.154 0 0 1 154.05 25.576 Q 154.119 24.816 154.474 23.038 A 87.155 87.155 0 0 1 154.538 22.726 A 52.789 52.789 0 0 1 154.894 21.112 Q 155.105 20.222 155.367 19.229 A 98.855 98.855 0 0 1 155.7 18.001 L 160.65 0.751 L 173.325 0.751 L 173.325 55.501 L 163.05 55.501 L 163.05 40.501 A 202.492 202.492 0 0 1 163.153 34.15 A 233.636 233.636 0 0 1 163.238 31.838 Q 163.425 27.301 163.725 22.801 A 329.84 329.84 0 0 1 164.044 18.441 A 270.948 270.948 0 0 1 164.4 14.363 A 1264.223 1264.223 0 0 1 164.671 11.552 Q 164.888 9.329 165.075 7.501 L 158.775 32.251 L 149.25 32.251 L 142.65 7.501 A 132.586 132.586 0 0 1 142.931 9.735 Q 143.166 11.724 143.4 14.138 Q 143.775 18.001 144.113 22.463 Q 144.45 26.926 144.675 31.576 A 190.906 190.906 0 0 1 144.886 38.34 A 167.861 167.861 0 0 1 144.9 40.501 L 144.9 55.501 Z" id="3" vectorEffect="non-scaling-stroke"/>
                  <path d="M 216.225 55.501 L 182.475 55.501 L 182.475 0.751 L 216.225 0.751 L 216.225 10.351 L 193.5 10.351 L 193.5 22.651 L 213.6 22.651 L 213.6 32.251 L 193.5 32.251 L 193.5 45.901 L 216.225 45.901 L 216.225 55.501 Z" id="4" vectorEffect="non-scaling-stroke"/>
                  <path d="M 237.525 55.501 L 226.35 55.501 L 226.35 0.751 L 243.975 0.751 Q 249.722 0.751 253.949 2.705 A 17.931 17.931 0 0 1 254.1 2.776 A 16.075 16.075 0 0 1 258.84 6.127 A 14.957 14.957 0 0 1 260.738 8.551 A 15.268 15.268 0 0 1 262.913 14.639 A 19.804 19.804 0 0 1 263.1 17.401 Q 263.1 22.726 260.513 26.926 Q 257.925 31.126 253.5 33.001 L 263.85 55.501 L 251.625 55.501 L 242.775 34.801 L 237.525 34.801 L 237.525 55.501 Z M 237.525 10.501 L 237.525 25.051 L 243.975 25.051 Q 247.725 25.051 249.788 23.176 A 6.126 6.126 0 0 0 251.668 19.797 A 9.144 9.144 0 0 0 251.85 17.926 A 9.671 9.671 0 0 0 251.606 15.688 A 6.367 6.367 0 0 0 249.788 12.451 A 6.751 6.751 0 0 0 246.945 10.877 Q 245.623 10.501 243.975 10.501 L 237.525 10.501 Z" id="5" vectorEffect="non-scaling-stroke"/>
                  <path d="M 352.125 55.501 L 316.725 55.501 L 316.725 44.926 L 334.125 28.126 Q 336.414 25.892 337.852 23.908 A 19.016 19.016 0 0 0 338.738 22.576 Q 340.275 20.026 340.275 17.026 Q 340.275 13.726 338.513 11.926 A 5.825 5.825 0 0 0 335.51 10.31 A 8.641 8.641 0 0 0 333.675 10.126 A 9.23 9.23 0 0 0 331.483 10.371 A 6.251 6.251 0 0 0 328.388 12.113 Q 326.57 14.002 326.48 17.278 A 12.579 12.579 0 0 0 326.475 17.626 L 315.225 17.626 A 21.404 21.404 0 0 1 315.711 12.958 A 16.296 16.296 0 0 1 317.513 8.288 Q 319.8 4.351 324 2.176 A 18.972 18.972 0 0 1 329.516 0.36 A 25.623 25.623 0 0 1 333.9 0.001 A 24.098 24.098 0 0 1 338.441 0.409 A 17.904 17.904 0 0 1 343.163 1.988 A 15.542 15.542 0 0 1 347.889 5.591 A 14.767 14.767 0 0 1 349.313 7.501 A 14.368 14.368 0 0 1 351.34 13.157 A 18.671 18.671 0 0 1 351.525 15.826 Q 351.525 21.151 348.9 26.026 Q 346.86 29.815 342.916 33.877 A 61.104 61.104 0 0 1 340.5 36.226 L 330.6 45.376 L 352.125 45.376 L 352.125 55.501 Z" id="7" vectorEffect="non-scaling-stroke"/>
                  <path d="M 360.975 39.751 L 360.975 16.501 A 18.704 18.704 0 0 1 361.527 11.864 A 15.118 15.118 0 0 1 363.188 7.838 A 15.059 15.059 0 0 1 369.434 2.071 A 17.558 17.558 0 0 1 369.45 2.063 Q 373.5 0.001 378.975 0.001 Q 384.525 0.001 388.538 2.063 Q 392.55 4.126 394.763 7.838 Q 396.975 11.551 396.975 16.501 L 396.975 39.751 A 18.704 18.704 0 0 1 396.423 44.387 A 15.118 15.118 0 0 1 394.763 48.413 Q 392.55 52.126 388.538 54.188 A 18.2 18.2 0 0 1 383.295 55.904 A 24.823 24.823 0 0 1 379.05 56.251 Q 373.5 56.251 369.45 54.188 A 15.345 15.345 0 0 1 364.409 50.166 A 14.918 14.918 0 0 1 363.188 48.413 Q 360.975 44.701 360.975 39.751 Z M 386.475 39.751 L 386.475 16.501 A 8.055 8.055 0 0 0 386.218 14.411 A 5.798 5.798 0 0 0 384.488 11.551 A 6.592 6.592 0 0 0 381.787 10.101 Q 380.531 9.751 378.975 9.751 A 11.117 11.117 0 0 0 376.757 9.958 Q 375.425 10.23 374.396 10.855 A 6.124 6.124 0 0 0 373.463 11.551 A 5.918 5.918 0 0 0 371.592 15.054 A 8.603 8.603 0 0 0 371.475 16.501 L 371.475 39.751 Q 371.475 42.901 373.5 44.701 A 6.771 6.771 0 0 0 376.253 46.156 Q 377.273 46.436 378.482 46.488 A 13.105 13.105 0 0 0 379.05 46.501 A 10.704 10.704 0 0 0 381.249 46.288 Q 382.654 45.993 383.727 45.289 A 6.197 6.197 0 0 0 384.488 44.701 A 5.918 5.918 0 0 0 386.358 41.197 A 8.603 8.603 0 0 0 386.475 39.751 Z M 377.182 33.039 A 5.87 5.87 0 0 0 378.975 33.301 A 6.73 6.73 0 0 0 380.012 33.224 A 4.733 4.733 0 0 0 382.8 31.801 A 4.981 4.981 0 0 0 383.999 29.67 A 6.586 6.586 0 0 0 384.225 27.901 A 6.866 6.866 0 0 0 384.112 26.628 A 4.762 4.762 0 0 0 382.8 24.076 Q 381.375 22.651 378.975 22.651 Q 376.65 22.651 375.188 24.076 A 4.649 4.649 0 0 0 373.931 26.238 A 6.374 6.374 0 0 0 373.725 27.901 Q 373.725 30.301 375.188 31.801 A 4.777 4.777 0 0 0 377.182 33.039 Z" id="8" vectorEffect="non-scaling-stroke"/>
                  <path d="M 442.125 55.501 L 406.725 55.501 L 406.725 44.926 L 424.125 28.126 Q 426.414 25.892 427.852 23.908 A 19.016 19.016 0 0 0 428.738 22.576 Q 430.275 20.026 430.275 17.026 Q 430.275 13.726 428.513 11.926 A 5.825 5.825 0 0 0 425.51 10.31 A 8.641 8.641 0 0 0 423.675 10.126 A 9.23 9.23 0 0 0 421.483 10.371 A 6.251 6.251 0 0 0 418.388 12.113 Q 416.57 14.002 416.48 17.278 A 12.579 12.579 0 0 0 416.475 17.626 L 405.225 17.626 A 21.404 21.404 0 0 1 405.711 12.958 A 16.296 16.296 0 0 1 407.513 8.288 Q 409.8 4.351 414 2.176 A 18.972 18.972 0 0 1 419.516 0.36 A 25.623 25.623 0 0 1 423.9 0.001 A 24.098 24.098 0 0 1 428.441 0.409 A 17.904 17.904 0 0 1 433.163 1.988 A 15.542 15.542 0 0 1 437.889 5.591 A 14.767 14.767 0 0 1 439.313 7.501 A 14.368 14.368 0 0 1 441.34 13.157 A 18.671 18.671 0 0 1 441.525 15.826 Q 441.525 21.151 438.9 26.026 Q 436.86 29.815 432.916 33.877 A 61.104 61.104 0 0 1 430.5 36.226 L 420.6 45.376 L 442.125 45.376 L 442.125 55.501 Z" id="9" vectorEffect="non-scaling-stroke"/>
                  <path d="M 450.975 39.751 L 450.975 16.501 A 18.704 18.704 0 0 1 451.527 11.864 A 15.118 15.118 0 0 1 453.188 7.838 A 15.059 15.059 0 0 1 459.434 2.071 A 17.558 17.558 0 0 1 459.45 2.063 Q 463.5 0.001 468.975 0.001 Q 474.525 0.001 478.538 2.063 Q 482.55 4.126 484.763 7.838 Q 486.975 11.551 486.975 16.501 L 486.975 39.751 A 18.704 18.704 0 0 1 486.423 44.387 A 15.118 15.118 0 0 1 484.763 48.413 Q 482.55 52.126 478.538 54.188 A 18.2 18.2 0 0 1 473.295 55.904 A 24.823 24.823 0 0 1 469.05 56.251 Q 463.5 56.251 459.45 54.188 A 15.345 15.345 0 0 1 454.409 50.166 A 14.918 14.918 0 0 1 453.188 48.413 Q 450.975 44.701 450.975 39.751 Z M 476.475 39.751 L 476.475 16.501 A 8.055 8.055 0 0 0 476.218 14.411 A 5.798 5.798 0 0 0 474.488 11.551 A 6.592 6.592 0 0 0 471.787 10.101 Q 470.531 9.751 468.975 9.751 A 11.117 11.117 0 0 0 466.757 9.958 Q 465.425 10.23 464.396 10.855 A 6.124 6.124 0 0 0 463.463 11.551 A 5.918 5.918 0 0 0 461.592 15.054 A 8.603 8.603 0 0 0 461.475 16.501 L 461.475 39.751 Q 461.475 42.901 463.5 44.701 A 6.771 6.771 0 0 0 466.253 46.156 Q 467.273 46.436 468.482 46.488 A 13.105 13.105 0 0 0 469.05 46.501 A 10.704 10.704 0 0 0 471.249 46.288 Q 472.654 45.993 473.727 45.289 A 6.197 6.197 0 0 0 474.488 44.701 A 5.918 5.918 0 0 0 476.358 41.197 A 8.603 8.603 0 0 0 476.475 39.751 Z M 467.182 33.039 A 5.87 5.87 0 0 0 468.975 33.301 A 6.73 6.73 0 0 0 470.012 33.224 A 4.733 4.733 0 0 0 472.8 31.801 A 4.981 4.981 0 0 0 473.999 29.67 A 6.586 6.586 0 0 0 474.225 27.901 A 6.866 6.866 0 0 0 474.112 26.628 A 4.762 4.762 0 0 0 472.8 24.076 Q 471.375 22.651 468.975 22.651 Q 466.65 22.651 465.188 24.076 A 4.649 4.649 0 0 0 463.931 26.238 A 6.374 6.374 0 0 0 463.725 27.901 Q 463.725 30.301 465.188 31.801 A 4.777 4.777 0 0 0 467.182 33.039 Z" id="10" vectorEffect="non-scaling-stroke"/>
                </g>
              </svg>
            </div>
            <img src={page2img} alt="summer 2020" className='object-contain h-full w-full'/>
          </div>
          <div ref={sidebarText} className='uppercase flex gap-4 absolute bottom-8 items-center justify-center cursor-pointer opacity-0 translate-x-4'>
            <span>Size Guide</span>
            <BsChevronUp />
          </div>
        </div>
        {/* Arrows, Miscl fillers */}
        <img src={arrow8} alt="red arrow" className='arrow absolute h-16 object-contain top-48 left-96 opacity-0 scale-0 rotate-90'/>
        <img src={arrow9} alt="red arrow" className='arrow absolute h-12 object-contain bottom-12 right-[30%] opacity-0 scale-0 -rotate-45'/> 
        <SiPluscodes color='#DF6A63' className='rotatePlus absolute top-36 left-[35%] opacity-0 text-2xl'/>
        <img src={arrow3} alt="red arrow" className='arrow2 absolute h-16 object-contain top-48 right-[40%] opacity-0 scale-0 hidden'/>
        <img src={arrow5} alt="red arrow" className='arrow2 absolute h-12 object-contain bottom-12 right-[30%] opacity-0 scale-0 hidden'/> 
    </div>
  )
}

export default Landing;