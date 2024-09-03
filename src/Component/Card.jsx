import React from 'react'
import { MdStars } from "react-icons/md";
import { LuDot } from "react-icons/lu";

const Card = (props) => {
    const fooditems = props.foodData
  
return (
    <div>
        <div className='me-8 '>
            <div className=" group w-48  sm:w-[260px] md:w-[222px] h-[160px] relative rounded-[16px] overflow-hidden  ">
                <img src={`Images/${fooditems.image} `} alt="" className="object-coverh-full w-full rounded-[15px] group-hover:scale-110 duration-150"  />
                <div className='img-overlay absolute w-full h-[180px] top-0 '>
                    <p className='absolute top-[122px] left-2 text-[19px] font-extrabold text-[#ffffff]'>{fooditems.offer}</p>
                </div>   
            </div>
            <div className='pl-3'>
                <p className='text-[rgba(2,6,12,0.92)] text-lg font-bold mt-2'>{fooditems.title}</p>
                <p><MdStars className='inline text-green-700 text-[22px]'/> 
                <span className='text-[16px] text-[rgba(2,6,12,0.92)]'>{fooditems.rating}</span>
                <LuDot className='inline text-xl'/>
                <span  className='text-[17px] text-[rgba(2,6,12,0.92)] font-semibold'>{fooditems.minTime} - {fooditems.maxTime} mins</span>
                </p>
                <p className='text-[rgba(2,6,12,0.6)] text-base font-semibold'>{fooditems.name}</p>
                <p className='text-[rgba(2,6,12,0.6)] text-base  font-semibold'>{fooditems.place}</p>
            </div>
            
        </div>
    </div>
)}
export default Card