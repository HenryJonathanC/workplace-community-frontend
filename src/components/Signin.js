import React from 'react'
import './Signin.css'

const Signin = ({isUser, setIsUser}) => {
  return (
    <div className=' w-fit flex flex-col justify-center items-center'>
        <div className='bg-white rounded-3xl'>
            <div className="buttons flex justify-around rounded-t-3xl">
                <button onClick={()=>setIsUser(true)} className='font-medium signIn py-3 px-20'>Sign-In</button>
                <button onClick={()=>setIsUser(false)} className='font-medium signUp py-3 px-20'>Sign-Up</button>
            </div>
            <div>
                {isUser?
                 <>
                    <h1 className='text-black mb-3 pt-9 font-semibold'>soombo Coworker's Community</h1>
                    <form className='flex flex-col mb-8'>
                    <label className='mx-10 self-start font-light text-sm' htmlFor='username'>Username</label>
                    <input className='mx-10 border-color font-light text-xs px-2 focus' name='username' type='text' placeholder='Your pseudonym' />
                    <label className='mx-10 mt-3 self-start font-light text-sm' htmlFor='password'>Password</label>
                    <input className='mx-10 border-color font-light text-xs px-2 focus' name='password' type='password' placeholder='*****' />
                    <a href='#' className='mx-10 my-3 self-start cursor-pointer underline link-color'>Forgot password?</a>
                    <button className='mx-10 py-2 rounded-lg bg-gradient-to-r from-signInActive to-buttonRight cursor-pointer button-color' type='submit'>NEXT</button>
                    </form>
                 </> :
                 <>
                    <h1 className='text-black pt-9 font-semibold'>Join Your Colleagues</h1>
                    <form className='flex flex-col mb-8'>
                    <label className='mx-10 self-start font-light text-sm' htmlFor='username'>Work email</label>
                    <input className='mx-10 border-color font-light text-xs px-2 focus' name='username' type='text' placeholder='example: john@theragency.com' />
                    <p className='mx-10 self-start font-light text-sm py-4'>🧙‍♂️ Your work email is only used to confirm which space you belong to</p>
                    <p className='mx-10 self-start font-light text-sm py-4'>🔐 Your identity is protected.</p>
                    <p className='mx-10 self-start font-light text-sm py-4'>🦄 Just be yourself... and get rewarded for it!</p>
                    <button className='mx-10 mt-3 py-2 rounded-lg bg-gradient-to-r from-signInActive to-buttonRight cursor-pointer button-color' type='submit'>VERIFY</button>
                    </form>
                 </> }
                
                
            </div>
        </div>
    </div>

  )
}

export default Signin