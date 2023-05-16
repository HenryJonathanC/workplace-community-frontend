import React from 'react'

const Leaderboard = () => {
  return (
    <div style={{flex: .45}} className='ml-8 mt-16'>
        <h1 className='text-start text-2xl uppercase mt-5 mb-5'>Leaderboard</h1>
        <div className='mt-5 p-5 mb-5 rounded-md shadow bg-gradient-to-r from-signInActive to-rightBetween w-full'>
            <div  style={{backgroundColor: 'rgb(233 233 233 / 40%)'}} className='ml-20 w-fit flex rounded-md items-center'>
                <h1 style={{color: 'white', backgroundColor: 'rgb(233 233 233 / 40%)'}} className='font-semibold mr-4 rounded-md p-3'>All Time</h1>
                <h1 style={{color: 'white', }} className='font-semibold mr-4 rounded-md p-3'>This Week</h1>
                <h1 style={{color: 'white', }} className='font-semibold rounded-md p-3'>This Month</h1>
            </div>
            <div className='mt-4 flex justify-center items-end'>
                <img className='w-32 self-end mr-4 rounded-full img-radius' src='https://soombo.loominate.app/static/media/avatar2.9555ff10.png' alt='' />
                <img className='w-52 self-start mr-4 rounded-full img-radius' src='https://soombo.loominate.app/static/media/avatar1.c1ae5e66.png' alt=''/>
                <img className='w-32 self-end rounded-full img-radius' src='https://soombo.loominate.app/static/media/avatar3.9d063941.png' alt=''/>
            </div>
            <div className='mt-5 mb-10'>
                <h1 style={{color: 'white'}} className='font-medium text-2xl'>1</h1>
                <h1 style={{color: 'yellow'}} className='font-medium text-xl' >territorialsabe</h1>
            </div>
        </div>
    </div>
  )
}

export default Leaderboard