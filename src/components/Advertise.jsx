import React from "react";
import {Link} from 'react-router-dom' 
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Advertise(){
    const isLogged = localStorage.getItem("isLogged");
    return(
        <div className="ms-[1%] w-[98%] mt-[0.7%]">
        {!isLogged &&
            <div className='advertise  h-[80px]  '>
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
           autoPlay={true}
           src="D:/ITL/Practice/ReactJS/spotify-songs/song_1.mp3"
           onPlay={e => console.log("onPlay")}
           
           // other props here
         />
        }

        </div>

    )
}