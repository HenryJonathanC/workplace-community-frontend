import { Button, Input } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { SendOutlined } from '@ant-design/icons'

const Polls = () => {

  const userData = useSelector(state=>state.userData.user)

  const suffix = (
    <Button 
      onClick={onclick}
      className="text-xs pr-1 "
        style={{
          borderRadius:"5rem",
          backgroundColor:"#198754",
          borderColor: "#198754",
          color: "white"
        }}
    >POST <SendOutlined  className="mb-" /> </Button>
  );

  const onClick = (e) =>{
    console.log(e.target.value)
  }

  return (
    <div style={{backgroundColor: 'white'}} className='flex flex-col items-start mt-5 p-5 mb-5 rounded-md shadow'>
        <div className='flex w-full justify-between'>
          <button className=' text-start cursor-pointer m-1 mb-2 text-xs font-light p-1 px-2 rounded categories-btn'>Ask Me Anything </button>
          <svg className='w-6 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  id="ellipsis-v"><path fill="none" stroke='black' d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path></svg>
        </div>
        <div className='flex items-center'>
          <svg style={{backgroundColor: 'grey'}} className='w-10 mr-2 cursor-pointer rounded-full p-0' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="user-circle"><path fill="black" stroke='grey' d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z"></path></svg>
          {/* <svg className='w-8 mr-2 cursor-pointer rounded-full p-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="user"><path fill="#000" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489 7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489 7.489 0 0 1-6-3Z" clip-rule="evenodd"></path></svg> */}
          <p>Anonymous</p>
          <p style={{color: '#ff2692'}} className='text-xs ml-4 border text-center px-2 rounded h-5 '>You</p>
        </div>
        <h1 className='mt-2 text-lg mb-5'>Yes or No</h1>
        <div className='mb-4 h-7 flex w-full justify-between bg-gradient-to-r from-signInActive to-rightBetween rounded-3xl'>
          <p style={{color: 'white'}} className='ml-4'>no</p>
          <p style={{color: 'white'}} className='mr-4'>100%</p>
        </div>
        <div className='h-7 flex w-full justify-between bg-gradient-to-r from-pollNegLeft to-pollNegRight rounded-3xl pollNeg'>
          <p style={{color: 'white'}} className='ml-4'>yes</p>
          <p style={{color: 'white'}} className='mr-4'>0%</p>
        </div>
        <h1 className='mt-3 text-signInActive font-semibold'>1 colleague has voted</h1>
        <p style={{color: '#a0a0a0'}} className='mt-3 text-sm font-medium'>Voting ended May 10, 2023</p>
        <p style={{color: ' #ff2692'}} className='mt-3'>#no #yes</p>
        <div className='flex mt-3'>
          <svg className='w-5 mr-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="thumbs-up"><path fill="black" d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z"></path></svg>
          <p className='mr-4'>0</p>
          <svg className='w-5 mr-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="thumbs-down"><path fill="black" d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z"></path></svg>
          <p className='mr-4'>0</p>
          <svg className='w-5 mr-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="comment"><path fill="black" d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg>
          <p>0</p>
        </div>
        <div className='mt-3 flex items-center w-full'>
          <img className='w-9 h-9 mr-3' src={userData.imgUrl} alt=''/>
          {/* <textarea style={{width: '34rem'}} placeholder='Comment...' className='ml-12 px-5 h-12 transform-none resize-none pt-2 border rounded-full overflow-hidden absolute'></textarea>
          <button style={{marginLeft: '32.2rem', backgroundColor: '#198754', color: 'white'}} className='opacity-75 p-2 rounded-full flex absolute items-center'>Post<svg className='w-5 ml-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="message"><path fill="white" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"></path></svg></button> */}
          <Input
            placeholder={'Comment as '+ userData.username}
            enterbutton="Search"
            size="large"
            suffix={suffix}
            onClick={onClick}
            className="rounded-3xl"
          />
        </div>
        <p style={{color: '#4b008b'}} className='self-center mt-5 font-medium text-sm'>View Comments</p>
      </div>
  )
}

export default Polls