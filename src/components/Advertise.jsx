import React from "react";
import {Link} from 'react-router-dom' 
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song_1 from '../images/song_1.mp3'
export default function Advertise(){
    const isLogged = localStorage.getItem("isLogged");
    return(
        <div className="xs:w-[96%] ms-[1%] md:w-[98%] mt-[0.7%]">
        {!isLogged &&
            <div className='advertise  h-[70px]  '>
                <div className='inline-block text-white p-2'>
                    <p>PREVIEW OF SPOTIFY</p>
                    <p>Signup and get unlimited song and podcast</p>
                </div>
                <div className='inline-block float-right p-2'>
                <Link to='/Sign-up'><button className='bg-white rounded-full p-3 w-auto text-black font-bold hover:scale-105'>Sign up free</button></Link>

                </div>
            </div>
        }
        {isLogged&&
           <AudioPlayer
           autoPlay={false}
           src={song_1}
           onPlay={e => console.log("onPlay")}
            
           // other props here

           
         />
        }

        </div>

    )
}