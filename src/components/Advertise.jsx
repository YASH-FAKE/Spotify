import React from "react";
import {Link} from 'react-router-dom' 

export default function Advertise(){
    return(
        <div className='advertise w-[98%] h-[80px] ms-[1%] mt-[0.7%]'>
            <div className='inline-block text-white p-2'>
                <p>PREVIEW OF SPOTIFY</p>
                <p>Signup and get unlimited song and podcast</p>
            </div>
            <div className='inline-block float-right p-2'>
            <Link to='/Sign-up'><button className='bg-white rounded-full p-3 w-auto text-black font-bold hover:scale-105'>Sign up free</button></Link>

            </div>
        </div>
    )
}