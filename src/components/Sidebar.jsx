import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import {BiSearch} from 'react-icons/bi';
import {BiLibrary} from 'react-icons/bi';
import {TbWorld} from 'react-icons/tb';


export default function Sidebar()
{
    const nav1Data = [
        {
            title:'Home',
            icon:<GoHomeFill size='11%' className='me-3'/>
        },
        { 
            title:'Search',
            icon:<BiSearch size='11%' className='me-3'/>
        }
    ];
    const nav2Data = [
        {
            title:'Your Library',
            icon:<BiLibrary size='11%' className='me-3'/>
        },
        ];
    const sideBarFooterData = [
        {
            title:'Legal',
            link:'www.legal.com'
        },
        {   
            title:'Privacy Center',
            link:'www.pc.com'
        },
        {
            title:'Privacy Policy',
            link:'www.pp.com'
        },
        {
            title:'Cookies',
            link:'www.cookies.com'
        },
        {
            title:'About Ads',
            link:'www.about-ads.com'
        },
        {
            title:'Accessibility',
            link:'www.accessibility.com'
        }
    ];


    return(
        <div className='w-[22%] absolute'>
                <div className='bg-gray-500/[0.2] ms-2 mt-2 pb-5 h-full rounded-md'>
                    <ul className='ms-[7%]'>
                        {
                            nav1Data.map((item)=>(
                                <li className='text-gray-400 cursor-pointer  pt-5 font-semibold hover:text-white flex'>{item.icon}{item.title}</li>
                            ))
                        }
                    </ul>
                </div> 
                <div className='pt-7 bg-gray-500/[0.2] ms-2 mt-2 pb-5 h-full rounded-md'>
                        {
                            nav2Data.map((item)=>(
                                <span className='ms-[7%] cursor-pointer font-semibold text-gray-400 hover:text-white flex'>{item.icon}{item.title}</span>
                            ))
                        }
                    <div className='text-white w-full mt-5 max-h-[150px] overflow-y-auto pb-3'>
                        <div className='inline-block ms-[1.5%] w-[96%] bg-gray-500/[0.3] rounded-lg mt-2 pb-2'>
                            <p className='pt-[15px] ms-[10%] font-semibold'>Create Your first playlist</p>
                            <p className='ms-[10%] '>It's easy, we'll help you</p>
                            <button className='ms-[10%] rounded-full bg-white text-black font-semibold text-center p-1 w-[50%] mt-[20px]'>Create Playlist</button>
                        </div>
                        <div className='inline-block ms-[1.5%] w-[96%] bg-gray-500/[0.3] rounded-lg mt-2 pb-3'>
                            <p className='pt-[15px] ms-[10%] font-semibold'>Create Your first playlist</p>
                            <p className='ms-[10%] '>It's easy, we'll help you</p>
                            <button className='ms-[10%] rounded-full bg-white text-black font-semibold text-center p-1 w-[50%] mt-[20px]'>Create Playlist</button>
                        </div>
                    </div>
                    <div className='text-white mt-[10%] ms-[10%] max-w-[80%]'>
                        {
                            sideBarFooterData.map((item)=>
                            <a href={item.link} className='ml-2'><span className='text-xs'>{item.title}</span></a>
                            )
                        }
                    </div>
                    <div className='mt-[10%] ms-[10%] text-left'>
                        <button className='text-white p-2 border-[1px] border-white rounded-full font-semibold hover:border-[3px] flex'><TbWorld size='11%' className='me-3'/>English</button>
                    </div>
                </div> 
        </div>
    );
}
