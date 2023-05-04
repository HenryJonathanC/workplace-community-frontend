import React, { useState } from 'react'

const User = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`User : ${username}`)
        console.log(`Password : ${password}`)
    }
  return (
    <>
        <h1 className='text-black mb-5 pt-9 font-semibold'>soombo Coworker's Community</h1>
        <form onSubmit={handleSubmit} className='flex flex-col mb-8'>
            <label className='mx-12 self-start font-light text-base' htmlFor='username'>Username</label>
            <input value={username} onChange={e=> setUsername(e.target.value)} className='mx-12 border-color font-light text-xm px-2' name='username' type='text' placeholder='Your pseudonym' />
            <label className='mx-12 mt-5 self-start font-light text-base' htmlFor='password'>Password</label>
            <input value={password} onChange={e=> setPassword(e.target.value)} className='mx-12 border-color font-light text-xm px-2' name='password' type='password' placeholder='*****' />
            <a href='#' className='mx-12 my-7 self-start cursor-pointer underline link-color'>Forgot password?</a>
            <button className='mx-12 py-2 rounded-lg bg-gradient-to-r from-signInActive to-buttonRight cursor-pointer button-color' type='submit'>NEXT</button>
        </form>
    </>
  )
}

export default User