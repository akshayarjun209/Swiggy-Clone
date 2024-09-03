import React from 'react'
import { SiSwiggy } from "react-icons/si";

const Footer = () => {
  return (
    <div >
        <div className='bg-[rgb(240,240,245)] w-full mt-28 py-4 px-8 md:px-[180px] flex md:flex-row items-center  md:flex-col min-[320px]:flex-col min-[320px]:text-center '>
              <h4 className='text-[#02060CBF] text-[28px] font-[750] sm:mb-2 min-[320px]:mb-4'>For better experience,download the Swiggy app now</h4>
              <img src="Images/app_store.png" className='w-[180px] mx-5' alt="" />
              <img src="Images/play_store.png" className='w-[180px]' alt="" />
        </div>

        <div className='footer-link text-[rgba(255,255,255,0.6)] font-medium text-base w-full bg-[#02060C] px-9 md:px-[232px] py-8 grid  grid-cols-1 md:grid-cols-4 gap-3 sm:text-center min-[320px]:text-center'  >
            
            <div >
                <h4 className='text-2xl mb-3'><SiSwiggy className='text-[#ffffff] inline text-4xl'/> Swiggy</h4>
                <p className='pr-2'>© 2024 Bundl Technologies Pvt. Ltd</p>
            </div>

            <div>
                <h4  className='text-[#ffffff] text-lg  mb-3'>Company</h4>
                <p>About</p>
                <p>Careers</p>
                <p>Team</p>
                <p>Swiggy One</p>
                <p>Swiggy Instamart</p>
                <p>Swiggy Genie</p>
            </div>

            <div>
                <h4 className='text-[#ffffff] text-lg  mb-3'>Contact us</h4>
                <p>Help & Support</p>
                <p>Partner with us</p>
                <p>Ride with us</p>

                <h4 className='text-[#ffffff] text-lg mt-3 mb-3'>Legal</h4>
                <p>Terms & Conditions</p>
                <p>Cookie Policy</p>
                <p>Privacy Policy</p>
                <p>Investor Relations</p>              
            </div> 

            <div>
                <h4 className='text-[#ffffff] text-lg  mb-3'>We deliver to:</h4>
                <p>Bangalore</p>
                <p>Gurgaon</p>
                <p>Hyderabad</p>
                <p>Delhi</p>
                <p>Mumbai</p>
                <p>Pune</p>
                <select name="" id="" className='bg-[#02060C] border-[0.3px] p-1 rounded-md border-[rgba(255,255,255,0.05)]' placeholder="589 cities" >
                  <option selected>589 cities</option>
                  <option value="Nashik">Nashik</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Thane">Thane</option>
                  <option value="Navi Mumbai">Navi Mumbai</option>
                </select>                 
            </div>

        </div>
    </div>
  )
}

export default Footer