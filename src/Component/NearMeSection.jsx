import React from 'react'
import Button from './Button'

const NearMeSection = () => {

    const nearPlaces=[
         'Best Restaurants in Bangalore',
         'Best Restaurants in Pune',
         'Best Restaurants in Mumbai',
         'Best Restaurants in Delhi',
         'Best Restaurants in Hyderabad',
         'Best Restaurants in Kolkata',
         'Best Restaurants in Chennai',
         'Best Restaurants in Chandigarh',
         'Best Restaurants in Ahmedabad',
         'Best Restaurants in Jaipur',
         'Best Restaurants in Nagpur',
    ]

    const bestCousin=[
        'Chinese Restaurant Near Me       ',
        'South Indian Restaurant Near Me',
        'Indian Restaurant Near Me',
        'Kerala Restaurant Near Me',
        'Korean Restaurant Near Me',
        'North Indian Restaurant Near Me',
        'Seafood Restaurant Near Me',
        'Bengali Restaurant Near Me',
        'Punjabi Restaurant Near Me',
        'Italian Restaurant Near Me',
        'Andhra Restaurant Near Me',
    ]



  return (
    <div className='px-9 md:px-[100px] pt-4'>
         <hr className="mt-20"></hr>
        <div>
            <h5 className='text-[rgba(2,6,12,0.92)] text-2xl font-extrabold mt-14'>Best Places to Eat Across Cities</h5>
            <div className='grid grid-cols-4 mt-5 gap-x-2 md:gap-x-9 gap-y-2 md:gap-y-[17px]'>
            {nearPlaces.map((item,index)=>(
                <Button key={index} title={item}></Button>
            ))}
            
            </div>
        </div>

        <div>
            <h5 className='text-[rgba(2,6,12,0.92)] text-2xl font-extrabold mt-14'>Best Cuisines Near Me</h5>
            <div className='grid grid-cols-4 mt-5 gap-x-2 md:gap-x-9 gap-y-[17px]'>
            {bestCousin.map((item,index)=>(
                <Button key={index} title={item}></Button>
            ))}
            
            </div>
        </div>


    </div>
  )
}

export default NearMeSection