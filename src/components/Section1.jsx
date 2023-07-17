import React from "react";
import image_1 from '../images/image_1.jpg'
import {FaPlay} from 'react-icons/fa';

export default function Section1(props){
    console.log(props)

    return(
        <div className='bg-gray-500/[0.2] ms-[23%] w-[77%]'>
            <a href={props.secData.title_link}><span className='inline-block text-white text-2xl ms-[3%] font-bold absolute hover:underline underline-offset-1'>{props.secData.title}</span></a>
            <a href={props.secData.sub_title_link}><span className='text-gray-500 text-md pt-1 font-bold ms-[90%] hover:underline underline-offset-1 '>{props.secData.sub_title}</span></a>
            {
                props.secCardData.map((item)=>
                <div className="ms-[3%] mt-[3%] bg-black/[0.2] rounded-md inline-block w-[21%] mb-5 hover:bg-gray-500/[0.2] cursor-pointer">
                    <div className='p-4 relative'>
                    <button className='hidden text-white bg-green-500 h-[50px] w-[50px] rounded-full left-[135px] top-[150px] hover:absolute'><FaPlay size='40%' fill="black" className="ms-[32%]"/></button>
                    <img src={item.img_src} className='w-[100%] h-[190px] rounded-md mb-3'/>
                    
                    <span className='text-white font-bold pt-5'>{item.title}</span>
                    <p className='text-gray-500  font-semibold text-gray-300 max-w-sm'>{item.desc}</p>
                    </div>
                </div>
                )
            }
        </div>
    )
}