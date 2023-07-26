import Spotify_logo from '../images/spotify-logo.png'
import {BsFacebook} from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';
import { TextField,FormControlLabel,Radio,FormControl,FormLabel,RadioGroup,FormGroup,Checkbox } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import { SignInInitialValues, SignInValidationSchema } from '../ValidationSchema/Schema';
import { SignInUser } from '../Api/users';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import {BiErrorAlt} from 'react-icons/bi';
import { useState,useEffect } from 'react';

export default function Sign_in(){

    const [ErrMsg,SetErrMsg] = useState(false);
    const [ErrMsgData,SetErrMsgData] = useState('Incorrect Email or password');

    const navigate = useNavigate();
    const onSubmit = async (values) => {
        const userSignIn = await SignInUser(values);
        if(userSignIn.status===200){
            localStorage.setItem("data", JSON.stringify(userSignIn));
            localStorage.setItem("isLogged", "true");
            navigate("/");
        }else{
            SetErrMsgData(userSignIn.data.message)
            SetErrMsg(true)
            setTimeout(() => {
                SetErrMsg(false)
            }, 5000);
        }
    }
    // validation of Customer Form - formik //
    const formik = useFormik({
    initialValues: SignInInitialValues,
    validationSchema: SignInValidationSchema,
    onSubmit: onSubmit,
    });
    return(
        <div className='bg-white h-[600px] overflow-y-auto pb-[100px]  xs:pt-[20%] sm:pt-[20%] md:pt-[5%]'>
            <RouteLink to='/'><img src={Spotify_logo} className='w-[8%]  ms-[40%] inline-block'/></RouteLink>
            <span className='font-bold text-[20px] items-center'>Spotify</span>
            <p className='font-semibold  ms-[33%] xs:text-[12px] xs:ms-[40%] sm:ms-[40%] md:text-[30px]'>Log in to Spotify</p>
            <button className='bg-[#405a93] text-white font-semibold ps-1 pt-2 pb-2 pe-1 rounded-full w-auto flex items-center justify-center mt-[2%] m-auto hover:scale-105 xs:w-[40%] xs:text-[10px] md:text-[20px] md:w-[30%]'><BsFacebook size='8%' className='me-[3%]'/>Sign in with Facebook</button>
            <button className='border-2 border-black font-semibold ps-1 pt-2 pb-2 pe-1 rounded-full w-auto flex items-center justify-center mt-[2%] m-auto hover:scale-105  xs:w-[40%] xs:text-[10px] md:text-[20px] md:w-[30%]'><FcGoogle size='8%' className='me-[3%]'/>Sign in with Google</button>
            <div className='flex items-center mt-[2%]'>
                <hr className='w-[20%]  ms-[28%]'/> <span className='ms-[2%]'>or</span> <hr className='w-[20%] ms-[2%]'/>
            </div>    
                <div className=' mt-[2%] xs:w-[60%] xs:ms-[25%] md:w-[40%] md:ms-[30%]'>
                {ErrMsg &&                
                <div className='bg-red-700 p-3 text-white font-semibold items-center'>
                    <span className='flex'><BiErrorAlt size='5%' className='me-[2%]'/>{ErrMsgData}</span>
                </div>
                }
                <form autoComplete='off' onSubmit={formik.handleSubmit}>
                    <TextField id="email" size='small' margin='normal' name='email'  fullWidth  label="Email" variant="outlined" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
                    {formik.touched.email &&
                    formik.errors.email ? (
                    <div className="text-red-600 pl-3 pb-2">
                        {formik.errors.email}
                    </div>
                    ) : null}
                    <TextField id="password" size='small' margin='normal' name='password' type='password' fullWidth label="Password." variant="outlined" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password} />
                    {formik.touched.password &&
                    formik.errors.password ? (
                    <div className="text-red-600 pl-3 pb-2">
                        {formik.errors.password}
                    </div>
                    ) : null}
                    <button type='submit' className='bg-[#1ed760] ms-[25%] p-3 xs:w-[100px] md:w-[200px] rounded-full text-black font-bold hover:scale-105'>Sign in</button>
                </form>
                <span className='xs:ms-[0%] md:ms-[20%]'>Don't have an account?<RouteLink to='/Sign-up'><span className='text-[#1ed760] underline ms-[1%]'>Sign Up.</span></RouteLink> </span>
                </div>
            
        </div>
    )
}