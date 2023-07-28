import React, { useState } from 'react'
import {AiOutlineLeft} from 'react-icons/ai';
import {AiOutlineRight} from 'react-icons/ai';
import { Link } from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa';
import {AiOutlineLogout} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {BsArrowUpRightSquare} from 'react-icons/bs';



export default function Header(){
    const [isLogged,SetIsLOgged] = useState(localStorage.getItem("isLogged"));
    const [userData,SetuserData] = useState(localStorage.getItem("data"));
    const [isShowMenu,SetShowMenu] = useState(localStorage.getItem(false));
    

    const navigate = useNavigate();
    
    const LogOut = () =>{
        localStorage.removeItem("isLogged");
        localStorage.removeItem("data");
        navigate('/')
        SetIsLOgged(false)
    } 

    const showMenu = (value) =>{
        SetShowMenu(!value)
    }



    const profileDropdown = [
        {
            title:'Account',
            link:'www.legal.com'
        },
        {   
            title:'Profile',
            link:'www.pc.com'
        },
        {
            title:'Upgrade to premium',
            link:'www.pp.com'
        },
        {
            title:'Support',
            link:'www.cookies.com'
        },
        {
            title:'Download',
            link:'www.about-ads.com'
        },
        {
            title:'Setting',
            link:'www.accessibility.com'
        },
        {
            title:'Logout',
            link:'www.legal.com'
        }
    ];

    return(
    <div className='bg-black xs:hidden sm:ms-[10%]  md:ms-[23%] md:rounded-md md:h-[70px] md:flex md:w-[77%] md:items-center md:inline-block'>
        <div className='p-5 space-x-3'>
            <button className='bg-black rounded-full w-10 h-10 text-white'><AiOutlineLeft fill='white' className='w-5 h-5' size='5%'/></button>
            <button className='rounded-full w-10 h-10 text-white'><AiOutlineRight fill='white' className='w-5 h-5' size='5%'/></button>
        </div>
        {!isLogged &&
            <div className='xs:hidden sm:ms-[45%] md:ms-[60%] md:space-x-4 md:block'>
            <Link to='/Sign-up'><button className='text-gray-500 font-bold hover:text-white hover:scale-105'>Sign up</button></Link>
            <Link to='/Sign-in'><button className='bg-white rounded-full p-3 w-[110px] text-black font-bold hover:scale-105'>Log in</button></Link>
        </div>
        }
        {isLogged &&
            <div className='xs:hidden sm:ms-[45%] md:ms-[72%] md:block space-x-8 md:relative'>
                <button className='text-gray-500 font-bold hover:text-white' title='YASH' onClick={()=>showMenu(isShowMenu)}><FaUserCircle className='w-[190%] h-[190%]'/></button>
                <button className='text-gray-500 font-bold hover:text-white' title='Logout' onClick={LogOut}><AiOutlineLogout className='w-[190%] h-[190%]'/></button>
            </div>
        }
        {
            isShowMenu &&
            <div className='absolute z-40 bg-gray-900 text-white w-[15%] top-[10%] left-[80%] me-[5%]'>
                <>
                {profileDropdown.map((item,key)=>
                    <div className='hover:bg-gray-500  p-2'>
                    <Link to={item.link} className='cursor-auto'><span className='flex items-center cursor-auto'>{item.title} <BsArrowUpRightSquare size='15%' className='ps-2'/></span></Link>
                    </div>
                    )
                }
                </>
        </div>
                }
    </div>
    )
}