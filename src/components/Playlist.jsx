import React, { useState } from "react";
import image_1 from '../images/image_1.jpg'
import {FaPlay} from 'react-icons/fa';
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Advertise from "./Advertise";
import playListimg from '../images/playlist.jpg'
import {playlist} from '../ContentResource/playListData'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiMoreHorizontal} from 'react-icons/fi'

export default function Playlist(){

    const [startColor,setStartColor] = useState('#fff');
    const [endColor,setEndColor] = useState('#804252');
    return(
        <>
        <Sidebar/>
        <div className='overflow-y-auto w-[100%] h-[525px]'>
        <Header />
        <div className='xs:mb-[50px] sm:ms-[0%] sm:w-full md:w-[77%] md:ms-[23%]'  style={{background:`linear-gradient(to bottom, ${startColor} , ${endColor})`}}>
            <div className="xs:flex xs:flex-col xs:ms-[10%] md:flex md:flex-row pt-[5%] md:ms-[3%]">
                    <img className="xs:h-[50%] xs:w-[90%] sm:h-[30%] sm:w-[70%] md:h-[230px] md:w-[250px] shadow-lg" src={playListimg}/>
                    <div className="flex flex-col text-white font-bold mt-[5%] ms-[2%]">
                    <span className="text-[20px]">Playlist</span>
                    <span className="xs:text-[35px] md:text-[80px]">Hot Hits Hindi</span>
                    <span className="text-[10px] font-semibold text-gray-900">Hottest Hindi music served here. Cover - Rocky Aur Rani Kii Prem Kahaani</span>
                </div>
            </div>
        
            <div className="bg-gradient-to-b from-[#000000]/[0.4] via-black to-[#000000] justify-center mt-[5%]">
                <div className='p-[2%] flex'>
                    <button className='play_button text-white bg-green-500 h-[50px] w-[50px] rounded-full left-[135px] top-[150px] hover:scale-105'><FaPlay size='40%' fill="black" className="ms-[32%]"/></button>
                    <AiOutlineHeart size='5%' className="text-gray-900 hover:text-white ms-[2%]"/>
                    <FiMoreHorizontal size='5%' className="text-gray-900 hover:text-white ms-[2%]"/>
                </div>
                <table width='95%' className="text-[#e5e7eb] ms-[2.5%]">
                    <tr className="text-left">
                        <th className="text-center">#</th>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Date Added</th>
                        <th>Time</th>
                    </tr>
                    <hr className="w-[1500%]"/>
                    {
                        playlist.map((item,key)=>
                        <tr className="text-white text-center pt-[2%] items-center hover:bg-[#666666]/[0.5]">
                            <td>{key+1}</td>
                            <td className="flex items-center">
                                <img className="h-[35px] shadow-lg" src={playListimg}/>
                            <div className="flex flex-col text-left ms-[2%]">
                                <p className="xs:text-[12px] md:text-[18px]">{item.title}</p>
                                <p className="xs:text-[0px] md:text-[12px] text-gray-300">{item.sub_title}</p>
                            </div>
                            </td>
                        <td className="text-left">
                            <p className="xs:text-[10px] md:text-[15px]">{item.album}</p>
                        </td>
                        <td  className="xs:text-[10px] md:text-[15px] text-left"> {item.date}</td>
                        <td  className="xs:text-[10px] md:text-[15px] text-left">{item.time}</td>
                    </tr>
                    )}
                </table>
            </div>
        </div>
        <Footer/>
    </div>
    <Advertise />
    </>
        
    )
}