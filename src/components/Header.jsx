import React from 'react'
import {AiOutlineLeft} from 'react-icons/ai';
import {AiOutlineRight} from 'react-icons/ai';


export default function Header(){
    return(
    <div className='bg-black ms-[23%] rounded-md h-[15%] flex w-[77%]'>
        <div className='p-5 space-x-3'>
            <button className='bg-black rounded-full w-10 h-10 text-white'><AiOutlineLeft fill='white' className='w-5 h-5' size='5%'/></button>
            <button className='rounded-full w-10 h-10 text-white'><AiOutlineRight fill='white' className='w-5 h-5' size='5%'/></button>
        </div>
        <div className='p-5 space-x-4 float-right ms-[60%]'>
            <button className='text-gray-500 font-bold hover:text-white'>Sign up</button>
            <button className='bg-white rounded-full p-3 w-[110px] text-black font-bold'>Log in</button>
        </div>
    </div>
    )
}