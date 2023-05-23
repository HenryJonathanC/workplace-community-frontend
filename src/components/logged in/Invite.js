import React from 'react'
import Header from './Header'
import { message } from 'antd'

const Invite = () => {
    
    const copyToClipboard = () =>{
        navigator.clipboard.writeText('https://soombo.loominate.app')
        message.success('Link copied to clipboard')
    }

  return (
    <>
        <Header />
        <div style={{backgroundColor: '#e9e9e9'}} className='h-screen w-screen flex items-center justify-around flex-wrap'>
            <img src='https://soombo.loominate.app/static/media/banner-SUC3.b1de5d30.png' alt='otp.png' className='h-56' />
            <div style={{width: '35rem'}} className='text-left'>
                <h1 className='text-2xl font-semibold mb-3'>Invite colleagues, earn good karma</h1>
                <h2 className='text-sm font-light'>Just use this link or simply share a post with your colleagues.</h2>
                <div style={{backgroundColor: 'white'}} className='p-5 mt-7 w-full rounded-md h-28'>
                    https://soombo.loominate.app
                </div>
                <button onClick={copyToClipboard} className='mt-8 w-full uppercase py-2 rounded-lg bg-gradient-to-r from-signInActive to-rightBetween cursor-pointer button-color'>Copy link</button> 
                <h2 className='mt-4 text-sm font-light'>This link can be shared with both colleagues and non-colleagues who will be directed to their own organization's space.</h2>
            </div>
        </div>
    </>
  )
}

export default Invite