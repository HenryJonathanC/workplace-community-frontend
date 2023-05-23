import React from 'react'
import Categories from './Categories'
import Header from './Header'
import LeftNavBar from './LeftNavBar'
import RightNavBar from './RightNavBar'

const HomeCategories = () => {
  return (
    <div style={{backgroundColor: '#e9e9e9'}} className='flex h-fit w-fit'>
        <Header />
        <LeftNavBar />
        <Categories />
        <RightNavBar />
    </div>
  )
}

export default HomeCategories