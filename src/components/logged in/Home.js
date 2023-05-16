import React, { useState } from 'react'
import Header from './Header'
import LeftNavBar from './LeftNavBar'
import MyFeed from './MyFeed'
import RightNavBar from './RightNavBar'

const Home = () => {
  const [flag, setFlag] = useState('Feed')
  return (
    <div style={{backgroundColor: '#e9e9e9'}} className='flex h-fit w-fit'>
        <Header />
        <LeftNavBar flag={flag} />
        <MyFeed />
        <RightNavBar />
    </div>
  )
}

export default Home