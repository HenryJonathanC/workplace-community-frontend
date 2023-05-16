import React, { useState } from 'react'
import Header from './Header'
import LeftNavBar from './LeftNavBar'
import RightNavBar from './RightNavBar'
import Leaderboard from './Leaderboard'

const HomeLeaderboard = () => {

  const [flag, setFlag] = useState('Leaderboard')
  return (
    <div style={{backgroundColor: '#e9e9e9'}} className='flex h-fit w-fit'>
        <Header />
        <LeftNavBar flag={flag} />
        <Leaderboard  />
        <RightNavBar />
    </div>
  )
}

export default HomeLeaderboard