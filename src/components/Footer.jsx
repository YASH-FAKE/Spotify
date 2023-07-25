import React from 'react'
import { sec1,sec2,sec3,sec4 } from '../ContentResource/footerData'


export default function Footer(){
    return(
        <div className='bg-gray-500/[0.2] xs:hidden sm:ms-[0%] sm:pt-[4%] sm:w-full md:block  md:ms-[23%] md:w-[77%]'>
        <div className="text-white grid grid-cols-4 gap-4">
            <div className='w-[100%] ms-[16%]'>
                <span className='font-bold'>{sec1.title}</span>
                <ul className='mt-[10%]'>
                {
                    sec1.links.map((items)=>
                    <li><a href={items.link} className='hover:underline hover:text-white text-gray-300 leading-8'>{items.title}</a></li>
                    )
                }
                </ul>
            </div>
            <div className='w-[100%] ms-[12%]'>
            <span className='font-bold'>{sec2.title}</span>
                <ul className='mt-[10%]'>
                {
                    sec2.links.map((items)=>
                    <li><a href={items.link} className='hover:underline hover:text-white text-gray-300 leading-8'>{items.title}</a></li>
                    )
                }
                </ul>
            </div>
            <div className='w-[100%] ms-[12%]'>
            <span className='font-bold'>{sec3.title}</span>
                <ul className='mt-[10%]'>
                {
                    sec3.links.map((items)=>
                    <li><a href={items.link} className='hover:underline hover:text-white text-gray-300 leading-8'>{items.title}</a></li>
                    )
                }
                </ul>
            </div>
            <div className='w-[100%] ms-[0%] flex space-x-9 sm:space-x-5'>
                {
                    sec4.map((item,i)=>
                    <button key={i} className='bg-gray-500/[0.3] w-[40px] h-[40px] rounded-full justify-center flex items-center hover:bg-gray-500/[0.9]'>{item.icon}</button>
                    )
                }
            </div>
        </div>
        <div className='text-gray-500/[0.5]'>
            <hr className='w-[90%] text-center ms-[5%] mt-[3%]'/>
            <span className='text-gray-500 font-semibold ms-[5%] inline-block pt-10 pb-[80px]'>© 2023 Spotify AB</span>
        </div>
        </div>
    )
}