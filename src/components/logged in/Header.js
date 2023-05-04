import React from 'react'

const Header = () => {
  

  return (
    <div className='flex w-screen h-16 justify-between items-center bg-gradient-to-r from-signInActive to-buttonRight navbar fixed'>
        <h1 style={{color: 'white'}} className='cursor-pointer text-2xl font-bold ml-20'>LOOMINATE</h1>
        <input style={{width: '40rem'}} className='h-9 my-2 mx-12 font-light text-xm px-2 rounded-lg' type='text' placeholder='Search anything in feed...' />
        <div className='flex justify-around m-2 mr-20'>
          <svg className='w-6 mx-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="comment"><path fill="#0092E4" d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg>
          <svg className='w-6 mx-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="bell"><path fill="#0092E4" d="M18,13.18V10a6,6,0,0,0-5-5.91V3a1,1,0,0,0-2,0V4.09A6,6,0,0,0,6,10v3.18A3,3,0,0,0,4,16v2a1,1,0,0,0,1,1H8.14a4,4,0,0,0,7.72,0H19a1,1,0,0,0,1-1V16A3,3,0,0,0,18,13.18ZM8,10a4,4,0,0,1,8,0v3H8Zm4,10a2,2,0,0,1-1.72-1h3.44A2,2,0,0,1,12,20Zm6-3H6V16a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"></path></svg>

          <svg className='w-6 mx-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="user-circle"><path fill="#0092E4" d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z"></path></svg>
        </div>
    </div>
  )
}

export default Header