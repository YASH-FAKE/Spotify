import React from 'react'
import {AiOutlineLeft} from 'react-icons/ai';
import {AiOutlineRight} from 'react-icons/ai';

export default function Header(){
    return(
    <div className='bg-black xs:hidden sm:ms-[10%] md:inline-block md:ms-[23%] md:rounded-md md:h-[70px] md:flex md:w-[77%] md:items-center'>
        <div className='p-5 space-x-3'>
            <button className='bg-black rounded-full w-10 h-10 text-white'><AiOutlineLeft fill='white' className='w-5 h-5' size='5%'/></button>
            <button className='rounded-full w-10 h-10 text-white'><AiOutlineRight fill='white' className='w-5 h-5' size='5%'/></button>
        </div>
        <div className='xs:hidden sm:ms-[45%] md:ms-[60%] md:space-x-4 md:block'>
            <button className='text-gray-500 font-bold hover:text-white hover:scale-105'>Sign up</button>
            <button className='bg-white rounded-full p-3 w-[110px] text-black font-bold hover:scale-105'>Log in</button>
        </div>
    </div>
    )
}