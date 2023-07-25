import Spotify_logo from '../images/spotify-logo.png'
import {BsFacebook} from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';
import { TextField,FormControlLabel,Radio,FormControl,FormLabel,RadioGroup,FormGroup,Checkbox } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';

export default function Sign_up(){
    return(
        <div className='bg-white h-[600px] overflow-y-auto pb-[100px]  xs:pt-[10%] sm:pt-[20%] md:pt-[5%]'>
            <RouteLink to='/'><img src={Spotify_logo} className='w-[8%]  ms-[40%] inline-block'/></RouteLink>
            <span className='font-bold text-[20px] items-center'>Spotify</span>
            <p className='font-semibold  ms-[33%] xs:text-[12px] xs:ms-[25%] sm:ms-[33%] md:text-[30px]'>Sign up for free to start listening.</p>
            <button className='bg-[#405a93] text-white font-semibold ps-1 pt-2 pb-2 pe-1 rounded-full w-auto flex items-center justify-center mt-[2%] m-auto hover:scale-105 xs:w-[40%] xs:text-[10px] md:text-[20px]'><BsFacebook size='8%' className='me-[3%]'/>Sign up with Facebook</button>
            <button className='border-2 border-black font-semibold ps-1 pt-2 pb-2 pe-1 rounded-full w-auto flex items-center justify-center mt-[2%] m-auto hover:scale-105  xs:w-[40%] xs:text-[10px] md:text-[20px]'><FcGoogle size='8%' className='me-[3%]'/>Sign up with Google</button>
            <div className='flex items-center mt-[2%]'>
                <hr className='w-[20%]  ms-[25%]'/> <span className='ms-[2%]'>or</span> <hr className='w-[20%] ms-[2%]'/>
            </div>    
                <div className=' mt-[2%] xs:w-[60%] xs:ms-[25%] md:w-[40%] md:ms-[30%]'>
                <form autoComplete='off'>
                    <TextField id="email" size='small' margin='normal' name='email'  fullWidth  label="What's your Email?" variant="outlined" />
                    <TextField id="password" size='small' margin='normal' name='password' type='password' fullWidth label="Create a password." variant="outlined" />
                    <TextField id="username" size='small'  margin='normal'   name='username' fullWidth label="What should we call you?" variant="outlined" />
                    <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">What's your gender?</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        row
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    </FormControl>
                    <FormGroup>
                            <FormControlLabel control={<Checkbox/>} label="I accept T&C"/>
                    </FormGroup>
                    <RouteLink><button type='submit' className='bg-[#1ed760] ms-[25%] p-3 w-[100px] rounded-full text-black font-bold hover:scale-105'>Sign up</button></RouteLink>
                </form>
                <span className='xs:ms-[0%] md:ms-[20%]'>Have an account?<RouteLink  to='/Sign-in'><span className='text-[#1ed760] underline ms-[1%]'>Log in.</span></RouteLink> </span>
                </div>
            
        </div>
    )
}