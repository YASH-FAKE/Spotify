import React from "react";
import image_1 from '../images/image_1.jpg'
import {FaPlay} from 'react-icons/fa';

export default function Section1(props){
    console.log(props)

    return(
        <div className='bg-gray-500/[0.2] xs:mb-[50px] sm:ms-[0%] sm:w-full md:w-[77%] md:ms-[23%] md:mb-[0px]'>
            <a href={props.secData.title_link}><span className='inline-block text-white text-2xl ms-[3%] font-bold hover:underline underline-offset-1'>{props.secData.title}</span></a>
            <a href={props.secData.sub_title_link}><span className='inline-block text-gray-500 text-md pt-1 font-bold  hover:underline underline-offset-1 xs:float-right xs:me-3 sm:float-right sm:me-3  md:ms-[50%]'>{props.secData.sub_title}</span></a>
            <div className="ms-[3%] mt-[2%] grid xs:grid-cols-1 sm:w-full sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-6 md:w-[95%]">
            {
                props.secCardData.map((item,key)=>
                <div key={key} className="bg-black/[0.2] rounded-md w-full mb-5 hover:bg-gray-500/[0.2] cursor-pointer">
                    <div className='p-4 relative display_play_button'>
                    <button className='hidden play_button text-white bg-green-500 h-[50px] w-[50px] rounded-full left-[135px] top-[150px]'><FaPlay size='40%' fill="black" className="ms-[32%]"/></button>
                    <img src={item.img_src} className='w-[272px] h-[190px] rounded-md mb-3'/>
                    
                    <span className='text-white font-bold pt-5'>{item.title}</span>
                    <p className='text-gray-500  font-semibold text-gray-300 max-w-sm'>{item.desc}</p>
                    </div>
                </div>
                )
            }
                </div>
        </div>
    )
}