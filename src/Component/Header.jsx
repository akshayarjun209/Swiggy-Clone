import React, { useState } from 'react'
import { PiCaretDownBold } from "react-icons/pi";
import { PiBagSimpleBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { PiGpsFixFill } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";

const navlist= [
    {
        label: 'Swiggy Corporate',
        icon: <PiBagSimpleBold />},
    {
        label: 'Search',
        icon: <IoSearch />},
    {
        label: 'Offer',
        sup: 'NEW',
        icon:<BiSolidOffer /> },
        
    {
        label: 'Help',
        icon: <IoHelpBuoyOutline />},
    {
        label: 'Sign In',
        icon:<FaRegUser /> },
    {
        label: 'Cart',
        icon:<FaShoppingCart /> }
 
] 




const Header = () => {

    const[toggle , setToggle] =useState(false);

    const showHamburger = () => {
        setToggle(true);
        
    }

    const hideHamburger = () => {
        setToggle(false);
        
    }
  return (
    <>
    <div className='hamburger-overlay w-full h-full fixed duration-500 z-50' style={{ opacity: toggle? 1:0, visibility: toggle? "visible":"hidden"}}  onClick={hideHamburger}>
        <div className='w-[500px] h-full bg-white absolute duration-[400ms] p-[25px]' style={{ left: toggle? '0%':'-100%'}} onClick={(e)=>{e.stopPropagation();}}>
           
            <div className='pt-[30px] px-10' >

                <RxCross1 className='mb-5 cursor-pointer text-[20px] '  onClick={hideHamburger}/>

                <input placeholder='Search for area, Street name..'className=' font-semibold px-7 py-3 my-1 w-[370px] border border-[#d4d5d9]-[1px] shadow-lg hover:border-none'></input>
                
                <div className='border border-[#d4d5d9]-[1px] p-5 my-8'>
                    <span className=' hover:text-[#ff5200] cursor-pointer'><PiGpsFixFill className='m-2 inline' /> Get Correct Location </span>
                    <p className='text-[#93959f] mx-10 text-[13px]'>Using GPS</p>
                </div>
            </div>
            
        </div>
    </div>

    <header className='shadow-lg p-[15px] sticky top-0 z-10 bg-white'>
        <div className='max-w-[1200px] mx-auto flex items-center justify-between'>
            <div className='flex  items-center'>
                <div className='w-[90px] '>

                    <img src="Images/Swiggy-logo.png" alt="sample-image" className='w-full'/>
                </div>

                <div className='flex items-center' >
                    <span className='border-b-2 font-medium border-black mx-2  hover:text-[#ff5200] hover:border-[#ff5200]'>Other</span> 
                    <PiCaretDownBold className=' inline cursor-pointer text-[#ff5200]' onClick={ showHamburger}/>
                </div>
            </div>
           

            <div className='hidden md:flex items-center list-none '>
                {
                    navlist.map((item, index)=>{
                        return(
                        <li key={index} className='flex items-center md:mx-[1px] lg:mx-1 xl:mx-4 md:text-[14px] lg:text-[16px] cursor-pointer hover:text-[#ff5200] whitespace-nowrap'> 
                         <span className='md:mx-1 lg:mx-3 text-[22px]'>{item.icon}</span>
                        {item.label}
                        <sup className='mx-1 text-[10px] font-bold text-[#ffa700]'>{item.sup}</sup>
                       
                        </li>
                        )
                    })
                }
                
            </div>
        </div>
         
    </header>
    </>
  )
}

export default Header