import React from 'react'
import Header from './Header'
import LeftNavBar from './LeftNavBar'
import RightNavBar from './RightNavBar'
import Settings from './Settings'

const HomeSettings = () => {
  return (
    <div style={{backgroundColor: '#e9e9e9'}} className='flex h-fit w-fit'>
        <Header />
        <LeftNavBar />
        <Settings />
        <RightNavBar />
    </div>
  )
}

export default HomeSettings