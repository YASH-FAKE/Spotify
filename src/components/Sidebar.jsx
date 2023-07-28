import React,{useState} from 'react';
import { GoHomeFill } from 'react-icons/go';
import {BiSearch} from 'react-icons/bi';
import {BiLibrary} from 'react-icons/bi';
import {TbWorld} from 'react-icons/tb';
import {BsPlusLg} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai'
import { render } from '@testing-library/react';

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

    const popupLanguage = [
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
        },
        {
            title:'Legal1',
            link:'www.legal.com'
        },
        {   
            title:'Privacy Center1',
            link:'www.pc.com'
        },
        {
            title:'Privacy Policy1',
            link:'www.pp.com'
        },
        {
            title:'Cookies1',
            link:'www.cookies.com'
        },
        {
            title:'About Ads1',
            link:'www.about-ads.com'
        },
        {
            title:'Accessibility1',
            link:'www.accessibility.com'
        },
        {
            title:'Legal2',
            link:'www.legal.com'
        },
        {   
            title:'Privacy Center2',
            link:'www.pc.com'
        },
        {
            title:'Privacy Policy2',
            link:'www.pp.com'
        },
        {
            title:'Cookies2',
            link:'www.cookies.com'
        },
        {
            title:'About Ads2',
            link:'www.about-ads.com'
        },
        {
            title:'Accessibility2',
            link:'www.accessibility.com'
        },
        {
            title:'Legal3',
            link:'www.legal.com'
        },
        {   
            title:'Privacy Center3',
            link:'www.pc.com'
        },
        {
            title:'Privacy Policy3',
            link:'www.pp.com'
        },
        {
            title:'Cookies3',
            link:'www.cookies.com'
        },
        {
            title:'About Ads3',
            link:'www.about-ads.com'
        },
        {
            title:'Accessibility3',
            link:'www.accessibility.com'
        }
    ];

    const [language, setlanguage] = useState(false);

    const showLanguage = (value)=> {
        setlanguage(!value)
    }   


    return(
        <>
        <div className='w-[22%] absolute xs:hidden sm:hidden md:inline-block'>
                <div className='bg-gray-500/[0.2] ms-2 mt-2 pb-5 h-full rounded-md'>
                    <ul className='ms-[7%]'>
                        {
                            nav1Data.map((item,key)=>(
                                <li key={key} className='text-gray-400 cursor-pointer  pt-5 font-semibold hover:text-white flex'>{item.icon}{item.title}</li>
                            ))
                        }
                    </ul>
                </div> 
                <div className='pt-7 bg-gray-500/[0.2] ms-2 mt-2 pb-5 h-full rounded-md relative'>
                        {
                            nav2Data.map((item,key)=>(
                                <span key={key} className='ms-[7%] cursor-pointer font-semibold text-gray-400 hover:text-white flex'>{item.icon}{item.title}</span>
                            ))
                        }
                    <BsPlusLg fill='white' className='absolute left-[240px] top-[33px]'/>
                    <div className='text-white w-full mt-5 max-h-[150px] overflow-y-auto pb-3'>
                        <div className='inline-block ms-[1.5%] w-[96%] bg-gray-500/[0.3] rounded-lg mt-2 pb-2'>
                            <p className='pt-[15px] ms-[10%] font-semibold'>Create Your first playlist</p>
                            <p className='ms-[10%] '>It's easy, we'll help you</p>
                            <button className='ms-[10%] rounded-full bg-white text-black font-semibold text-center p-1 w-[50%] mt-[20px] hover:scale-105'>Create Playlist</button>
                        </div>
                        <div className='inline-block ms-[1.5%] w-[96%] bg-gray-500/[0.3] rounded-lg mt-2 pb-3'>
                            <p className='pt-[15px] ms-[10%] font-semibold'>Create Your first playlist</p>
                            <p className='ms-[10%] '>It's easy, we'll help you</p>
                            <button className='ms-[10%] rounded-full bg-white text-black font-semibold text-center p-1 w-[50%] mt-[20px] hover:scale-105'>Create Playlist</button>
                        </div>
                    </div>
                    <div className='text-white mt-[10%] ms-[10%] max-w-[80%]'>
                        {
                            sideBarFooterData.map((item,key)=>
                            <a href={item.link} className='ml-2' key={key}><span className='text-xs'>{item.title}</span></a>
                            )
                        }
                    </div>
                    <div className='mt-[10%] ms-[10%] text-left pb-[8px]'>
                        <button onClick={()=>showLanguage(language)} className='text-white p-2 border-[0.5px] text-sm w-[100px] border-white rounded-full font-semibold hover:scale-105 flex'><TbWorld size='25%' className='me-3'/>English</button>
                    </div>
                </div> 
        </div>
        {
            language &&
          
                <div className='absolute bg-gray-600 w-[80%] h-[80%] mt-[3%] ms-[10%] z-40 rounded-lg'>
                <div className='ms-[2%]'>
                    <span className='font-bold text-white text-[26px]'>Choose a language</span>
                    <p className='font-semibold text-white text-[16px]'>This update what you read in open.spotify.com</p>
                    <AiOutlineClose onClick={()=>showLanguage(language)} size='8%' fill='white' className='absolute w-[40px] p-2 h-[40px] top-[4%] left-[93%] cursor-pointer bg-black rounded-full'/>
                </div>
                <hr className='mt-[2%]'/>
                <div className='grid grid-cols-4 gap-4 mt-[3%] h-[70%] overflow-y-auto'>
                    {
                        popupLanguage.map((item,key)=>
                            <div key={key} className="ms-[10%] me-[3%] p-5 text-white w-[85%] hover:bg-gray-500/[0.9] cursor-pointer">
                                <p>{item.title}</p>
                                <p>{item.link}</p>
                            </div>
                        )
                    }
                </div>
                </div>
        }
        </>
    );
}
