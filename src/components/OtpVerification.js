import axios from 'axios';
import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
    const [otp, setOtp] = useState('');
    const navigate= useNavigate();
    const userEmail = useSelector(state=>state.user.email)

    const handleOtpVerification = async e =>{
        e.preventDefault();
        console.log(otp)
        console.log(userEmail)
        await axios.post('http://localhost:3001/otp/otpverify', {
            "email": `${userEmail}`
        }).then(res=>{
            console.log(res.data)
            if(otp == parseInt(res.data.otp)){
                console.log('otp verified')
                navigate('/signUp/setup')
            }else{
                alert('incorrect otp')
            }
        }).catch(err=>console.log(err))
    }
  return (
    <div style={{backgroundColor: '#e9e9e9'}} className='h-screen w-screen flex items-center justify-around flex-wrap'>
        <img src='https://gmail.loominate.app/static/media/mons-with-pot.58ac9558.svg' alt='otp.png' className='h-56' />
        <div style={{width: '35rem'}} className='text-left'>
            <h1 className='text-2xl font-semibold'>Enter Verification Code</h1><br/>
            <h2 style={{color: '#6a666e'}}>Please Type in the 5-digit code sent to your work email. If it does not appear in your inbox, please check your Updates, Quarantined or Spam folders.</h2>
            <OtpInput
                inputStyle={{backgroundColor: '#e9e9e9', borderBottom: '1px solid black', margin: '.5rem', marginTop: '1rem', fontSize: '2rem'}}
                value={otp}
                onChange={setOtp}
                numInputs={5}
                renderInput={(props) => <input {...props} />}
            />
            {/* <input style={{backgroundColor: '#e9e9e9'}} className='mt-12 border_otp font-light text-xm px-2' /> */}
            <div className='mt-8 flex'>
                <div onClick={()=> navigate('/signin')} style={{borderColor: '#03c5cc'}} className='border-2 cursor-pointer w-fit rounded-lg px-4'>
                    <svg className='w-10 rounded' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="arrow-left"><path fill="#03c5cc" stroke='#e9e9e9' d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"></path></svg>
                </div>
                <button onClick={handleOtpVerification} className='uppercase ml-12 py-2 rounded-lg bg-gradient-to-r from-signInActive to-rightBetween cursor-pointer button-color w-64'>Next</button>
            </div>
        </div>
    </div>
  )
}

export default OtpVerification