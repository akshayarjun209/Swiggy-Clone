//import React, { useEffect, useState } from 'react'
import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

const Category = () => {

   const [slide, setSlide]=useState(0);

   const goBackward=()=>{
    if(slide===0) return false
    setSlide(slide-4);
   }

   const goForward=()=>{
    if(slide>=data.length-7) return false  
    setSlide(slide+4);
   }

   const data=[

    {
        "image": "North_Indian_4.jpeg",
        "path": "north-indian"
    },
    {
        "image": "Pizza.jpeg",
        "path": "pizza"
    },
    {
        "image": "Noodles.jpeg",
        "path": "noodles"
    },
    {
        "image": "Pasta.jpeg",
        "path": "pasta"
    },
    {
        "image": "Paratha.jpeg",
        "path": "paratha"
    },
    {
        "image": "Biryani_2.jpeg",
        "path": "biryani"
    },
    {
        "image": "Burger.jpeg",
        "path": "burger"
    },
    {
        "image": "Cakes.jpeg",
        "path": "cakes"
    },
    {
        "image": "Chinese.jpeg",
        "path": "chinese"
    },
    {
        "image": "Chole_Bature.jpeg",
        "path": "chole-bature"
    },
    {
        "image": "Dosa.jpeg",
        "path": "dost"
    },
    {
        "image": "Gulab_Jamun.jpeg",
        "path": "gulab-jamun"
    },
    {
        "image": "Ice_Creams.jpeg",
        "path": "ice-creams"
    },
    {
        "image": "Idli.jpeg",
        "path": "idli"
    },
    {
        "image": "Khichdi.jpeg",
        "path": "khichdi"
    },
    {
        "image": "Poori.jpeg",
        "path": "poori"
    },
    {
        "image": "Pure_Veg.jpeg",
        "path": "pure-veg"
    },
    {
        "image": "Rolls.jpeg",
        "path": "rolls"
    },
    {
        "image": "Salad.jpeg",
        "path": "salad"
    },
    {
        "image": "South_Indian_4.jpeg",
        "path": "south-indian"
    }
  ]

  //  for dynamic fetching data
  // const [data ,setData]= useState([]);
  

  // const fetchData= async()=>{
  //   const response= await fetch('')
  //   const catData = await response.json();
  //   setData(catData);
  // }

  // useEffect(()=>{
  //    fetchData()
   
  // },[])

  return (
    <div className=' px-9 md:px-[180px] pt-4'>
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold'>What's on your mind?</h1>
            <div className='flex '>
                <div className='bg-[#e2e2e7] w-9 h-9 mx-2 rounded-full flex items-center justify-center cursor-pointer'onClick={goBackward}  ><IoArrowBackOutline style={{opacity:slide===0 ?0.4:1}}  /></div>
                <div className='bg-[#e2e2e7] w-9 h-9 mx-2 rounded-full flex items-center justify-center cursor-pointer' onClick={goForward}><IoArrowForward style={{opacity:slide>=(data.length-7) ?0.5:1}} /></div>
            </div>
        </div>
 
        <div className='flex items-center mt-10 overflow-hidden '>

        {data.map((item, index)=>{
            return(
                <div key={index} className='w-28 md:w-[140px] shrink-0 duration-500' style={{ transform: `translateX(-${slide * 100}%)`}}>
                  <img src={`Images/${item.image}`} alt="" /> 
                </div>
            )})}
        </div>

        <hr className="mt-10"></hr>
    </div>
  )
}

export default Category