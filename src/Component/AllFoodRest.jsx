import React from 'react'
import Card from "./Card";
import { RxCaretDown } from "react-icons/rx";
import { PiSlidersHorizontalDuotone } from "react-icons/pi";

const restaurantChain =[
    {
        "image": "2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg",
        "offer": "Items at ₹179",
        "title": "Pizza Hut",
        "rating": 4.2,
        "minTime": 30,
        "maxTime": 40,
        "name": "Pizzas",
        "place": "New Jodhpur"
    },
    {
        "image": "75d0b3ebeb56fe2484c944e94cac7a8d.jpeg",
        "offer": "₹50 OFF ABOVE ₹199",
        "title": "Janta Sweet Home",
        "rating": 4.5,
        "minTime": 35,
        "maxTime": 40,
        "name": "Sweets,South Indian",
        "place": "Shastri Nagar"
    },
    {
        "image": "cef5bf4cc31dc3c46a1e1b027c5627e4.jpeg",
        "offer": "₹85 OFF ABOVE ₹149",
        "title": "Parihaar Bhojnalay",
        "rating": 4.3,
        "minTime": 35,
        "maxTime": 40,
        "name": "North India, Thalis",
        "place": "Sardarpura"
    },
    {
        "image": "eillc7d7hbrzcuussus5.jpeg",
        "offer": "₹70 OFF ABOVE ₹149",
        "title": "Kwality Walls Frozen",
        "rating": 4.5,
        "minTime": 25,
        "maxTime": 25,
        "name": "Desserts,Ice Cream",
        "place": "Chopsani Housing Board"
    },
    {
        "image": "6e04be27387483a7c00444f8e8241108.jpeg",
        "offer": "₹1-5 OFF ABOVE ₹179",
        "title": "The Good Bowl",
        "rating": 4.4,
        "minTime": 30,
        "maxTime": 35,
        "name": "Biryani, North India",
        "place": "Shastri Nagar"
    },
    {
        "image": "w7ndo1dkkk6kf4qfz2p1.jpeg",
        "offer": "₹100 OFF ABOVE ₹499",
        "title": "NIC Ice Creams",
        "rating": 4.7,
        "minTime": 25,
        "maxTime": 30,
        "name": "Desserts,Ice Cream",
        "place": "Sardarpura"
    },
    {
        "image": "f1bc9ddf53de574cdc35ab2f717df234.jpeg",
        "offer": "Items at ₹109",
        "title": "Dosh Center",
        "rating": 4.0,
        "minTime": 35,
        "maxTime": 40,
        "name": "South Indian",
        "place": "Chopsani Housing Board"
    },
    {
        "image": "919cb3be0e7406f86f6741ebe7c30128.jpeg",
        "offer": "₹125 OFF ABOVE ₹349",
        "title": "Lunch Box - Meals and Thalis",
        "rating": 4.3,
        "minTime": 30,
        "maxTime": 35,
        "name": "Biryani, North India",
        "place": "Shastri Nagar"
    },
    {
        "image": "535fc9f9c135f7982317bbb6a64a1ffc.jpeg",
        "offer": "₹70 OFF ABOVE ₹249",
        "title": "McDonald's",
        "rating": 4.4,
        "minTime": 30,
        "maxTime": 35,
        "name": "American",
        "place": "Rawaton Ka Bass"
    },
    {
        "image": "2a41aa363a8ae1e98a4cce95c2d0c589.jpeg",
        "offer": "₹100 OFF ABOVE ₹449",
        "title": "Kajal's Cake",
        "rating": 4.5,
        "minTime": 35,
        "maxTime": 40,
        "name": "Cake",
        "place": "Chopsani Housing Board"
    }
]
const AllFoodRest = () => {
    
    const filterButtons=[
        {
            label: 'Filter',
            icon: <PiSlidersHorizontalDuotone />
        },
        {
            label: 'Sort',
            icon: <RxCaretDown />
        },
        {
            label: 'Rating 4.0+',
            
        },
        {
            label: 'Pure Veg',
          
        },
        {
            label: 'Offer',
           
        },
        {
            label: 'Rs.300- Rs600',
           
        },
        {
            label: 'Less than Rs.300',
           
        }
    ]

  return (
    <div className='px-9 md:px-[180px] pt-4'>
        <h1 className='text-2xl font-bold'>Restaurants with online food delivery in Chhindwara</h1>
        <div className=' grid grid-cols-4 gap-y-1 md:flex items-center mt-4 '> 
            {filterButtons.map((item,index)=>(   
                <button key={index} className='border-[1px] border-gray-400 px-3 py-2 mr-2 rounded-3xl text-[#02060CBF] text-[14px] font-semibold flex items-center content-center'>{item.label} {item.icon}</button>
            ))}
            
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 md:gap-x-5 gap-y-5 mt-5">
            {restaurantChain.map((item,index)=>(   
            <Card key={index} foodData={item}></Card>
        ))}
        </div>

       
    </div>
  )
}

export default AllFoodRest 