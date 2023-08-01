import React from "react";
import image_1 from '../images/image_1.jpg'
import {FaPlay} from 'react-icons/fa';
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Advertise from "./Advertise";
import playListimg from '../images/playlist.jpg'

export default function Playlist(){
    return(
        <>
        <Sidebar/>
        <div className='overflow-y-auto w-[100%] h-[525px]'>
        <Header />
        <div className='bg-gradient-to-b from-[#e87795] to-[#804252] xs:mb-[50px] sm:ms-[0%] sm:w-full md:w-[77%] md:ms-[23%] md:mb-[0px]'>
            <div className="flex pt-[5%] ms-[3%] shadow-lg">
                <div>
                    <img className="h-[70%]" src={playListimg}/>
                </div>
                <div className="flex flex-col text-white font-bold mt-[5%]">
                    <span className="text-[20px]">Playlist</span>
                    <span className="text-[80px]">Hot Hits Hindi</span>
                    <span className="text-[10px] font-semibold text-gray-900">Hottest Hindi music served here. Cover - Rocky Aur Rani Kii Prem Kahaani</span>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    <Advertise />
    </>
        
    )
}