import React, { useState } from 'react'
import Header from './Header'
import LeftNavBar from './LeftNavBar'
import MyProfile from './MyProfile'
import RightNavBar from './RightNavBar'

const HomeProfile = () => {

    const [flag, setFlag] = useState('Profile')
  return (
    <div style={{backgroundColor: '#e9e9e9'}} className='flex h-fit w-fit'>
        <Header />
        <LeftNavBar flag={flag} />
        <MyProfile />
        <RightNavBar flag={flag} />
    </div>
  )
}

export default HomeProfile