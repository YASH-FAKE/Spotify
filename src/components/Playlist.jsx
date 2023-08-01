import React from "react";
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
    return(
        <>
        <Sidebar/>
        <div className='overflow-y-auto w-[100%] h-[525px]'>
        <Header />
        <div className='bg-gradient-to-b from-[#e87795] to-[#804252] xs:mb-[50px] sm:ms-[0%] sm:w-full md:w-[77%] md:ms-[23%]'>
            <div className="flex pt-[5%] ms-[3%]">
                    <img className="h-[230px] shadow-lg" src={playListimg}/>
                <div className="flex flex-col text-white font-bold mt-[5%] ms-[2%]">
                    <span className="text-[20px]">Playlist</span>
                    <span className="text-[80px]">Hot Hits Hindi</span>
                    <span className="text-[10px] font-semibold text-gray-900">Hottest Hindi music served here. Cover - Rocky Aur Rani Kii Prem Kahaani</span>
                </div>
            </div>
        
            <div className="bg-gradient-to-b from-[#000000]/[0.5] via-black to-[#000000] justify-center mt-[5%]">
                <div className='p-[2%] flex'>
                    <button className='play_button text-white bg-green-500 h-[50px] w-[50px] rounded-full left-[135px] top-[150px] hover:scale-105'><FaPlay size='40%' fill="black" className="ms-[32%]"/></button>
                    <AiOutlineHeart size='5%' className="text-gray-900 hover:text-white ms-[2%]"/>
                    <FiMoreHorizontal size='5%' className="text-gray-900 hover:text-white ms-[2%]"/>
                </div>
                <table width='95%' className="text-[#e5e7eb] ms-[2.5%]">
                    <tr className="text-left">
                        <th>#</th>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Date Added</th>
                        <th>Time</th>
                    </tr>
                    <hr className="w-[1500%]"/>
                    {
                        playlist.map((item,key)=>
                        <tr className="text-white text-center pt-[2%] items-center hover:bg-gray-700">
                            <td>{key+1}</td>
                            <td className="flex items-center">
                                <img className="h-[35px] shadow-lg" src={playListimg}/>
                            <div className="flex flex-col text-left ms-[2%]">
                                <p>{item.title}</p>
                                <p>{item.sub_title}</p>
                            </div>
                            </td>
                        <td className="text-left">
                            <p>{item.album}</p>
                        </td>
                        <td  className="text-left"> {item.date}</td>
                        <td  className="text-left">{item.time}</td>
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