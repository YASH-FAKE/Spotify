import Spotify_logo from '../images/spotify-logo.png'
import {BsFacebook} from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';
import { useFormik } from "formik";
import { TextField,FormControlLabel,Radio,FormControl,FormLabel,RadioGroup,FormGroup,Checkbox } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import { SignUpInitialValues, SignUpValidationSchema } from '../ValidationSchema/Schema';
import { SignUpUser } from '../Api/users';


export default function Sign_up(){
    const onSubmit = async (values) => {
        const userSignUp = await SignUpUser(values);
        console.log("userSignUp",userSignUp)
    }
    // validation of Customer Form - formik //
    const formik = useFormik({
    initialValues: SignUpInitialValues,
    validationSchema: SignUpValidationSchema,
    onSubmit: onSubmit,
    });

    return(
        <div className='bg-white h-[600px] overflow-y-auto pb-[100px]  xs:pt-[10%] sm:pt-[20%] md:pt-[5%]'>
            <RouteLink to='/'><img src={Spotify_logo} className='w-[8%]  ms-[40%] inline-block'/></RouteLink>
            <span className='font-bold text-[20px] items-center'>Spotify</span>
            <p className='font-semibold  ms-[33%] xs:text-[12px] xs:ms-[25%] sm:ms-[33%] md:text-[30px]'>Sign up for free to start listening.</p>
            <button className='bg-[#405a93] text-white font-semibold ps-1 pt-2 pb-2 pe-1 rounded-full w-auto flex items-center justify-center mt-[2%] m-auto hover:scale-105 xs:w-[40%] xs:text-[10px] md:text-[20px] md:w-[30%]'><BsFacebook size='8%' className='me-[3%]'/>Sign up with Facebook</button>
            <button className='border-2 border-black font-semibold ps-1 pt-2 pb-2 pe-1 rounded-full w-auto flex items-center justify-center mt-[2%] m-auto hover:scale-105  xs:w-[40%] xs:text-[10px] md:text-[20px] md:w-[30%]'><FcGoogle size='8%' className='me-[3%]'/>Sign up with Google</button>
            <div className='flex items-center mt-[2%]'>
                <hr className='w-[20%]  ms-[28%]'/> <span className='ms-[2%]'>or</span> <hr className='w-[20%] ms-[2%]'/>
            </div>    
                <div className='mt-[2%] xs:w-[60%] xs:ms-[25%] md:w-[40%] md:ms-[30%]'>
                <form autoComplete='off' onSubmit={formik.handleSubmit}>
                    <TextField id="email" size='small' margin='normal' name='email'  fullWidth  label="What's your Email?" variant="outlined"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email} />
                                {formik.touched.email &&
                                formik.errors.email ? (
                                <div className="text-red-600 pl-3 pb-2">
                                    {formik.errors.email}
                                </div>
                                ) : null}
                    <TextField id="password" size='small' margin='normal' name='password' type='password' fullWidth label="Create a password." variant="outlined" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}/>
                                {formik.touched.password &&
                                formik.errors.password ? (
                                <div className="text-red-600 pl-3 pb-2">
                                    {formik.errors.password}
                                </div>
                                ) : null}
                    <TextField id="username" size='small'  margin='normal'   name='name' fullWidth label="What should we call you?" variant="outlined" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}/>
                                {formik.touched.name &&
                                formik.errors.name ? (
                                <div className="text-red-600 pl-3 pb-2">
                                    {formik.errors.name}
                                </div>
                                ) : null}
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
                            <FormControlLabel control={<Checkbox/>} name='tc' label="I accept T&C" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.tc}/>
                                {formik.touched.tc &&
                                formik.errors.tc ? (
                                <div className="text-red-600 pl-3 pb-2">
                                    {formik.errors.tc}
                                </div>
                                ) : null}
                    </FormGroup>
                    <button type='submit' className='bg-[#1ed760] ms-[25%] p-3 w-[150px] rounded-full text-black font-bold hover:scale-105'>Sign up</button>
                </form>
                <span className='xs:ms-[0%] md:ms-[20%]'>Have an account?<RouteLink  to='/Sign-in'><span className='text-[#1ed760] underline ms-[1%]'>Log in.</span></RouteLink> </span>
                </div>
            
        </div>
    )
}