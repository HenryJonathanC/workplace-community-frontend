import React, { useState } from 'react'
import './Login.css'
import Signin from './Signin'

const Login = () => {
  const [isUser, setIsUser] = useState(true)
  return (
    <div className='text-white h-screen w-screen- bg-gradient-to-r from-gradientLeft to-gradientRight flex justify-around flex-wrap'>
        <div className=' w-fit flex flex-col justify-center items-center'>
            <h1 className='my-3 font-semibold uppercase text-white w-fit ml-5'>Loominate</h1>
            <h3 className='my-3 font-bold text-white w-fit ml-5'>Your Workplace Community!</h3>
            <img className='pt-3 w-3/5'  src='https://soombo.loominate.app/static/media/new3monsters.afd23f01.png' alt='welcome.jpg'/>
        </div>
        <Signin isUser={isUser} setIsUser={setIsUser} />
    </div>
  )
}

export default Login