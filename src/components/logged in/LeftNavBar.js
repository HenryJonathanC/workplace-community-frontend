import React from 'react'

const LeftNavBar = () => {

    const list = [ 'Advice Needed','hi', 'sa', 'Asking For A Colleague..', 'Ask Me Anything', 'Bluecollar Community', 'Burning Issues', 'Career Advice', 'Changemaking' ]

  return (
    <div style={{flex: .2}} className='mt-20'>
        <div style={{backgroundColor: 'white'}} className='flex flex-col items-start ml-20 mt-5 p-5 mb-5 rounded-md'>
            <div className='flex mb-3'>
                <img className='w-4 mr-3' src='https://www.svgrepo.com/show/483341/home.svg' />
                <h1 className='text-xl uppercase'>My Feed</h1>
            </div>
            <div className='flex mb-3'>
                <img className='w-4 mr-3' src='https://www.svgrepo.com/show/488260/leaderboard.svg' />
                <h1 className='text-xl uppercase'>Leaderboard</h1>
            </div>
            <div className='flex mb-3'>
                <img className='w-4 mr-3' src='https://www.svgrepo.com/show/512729/profile-round-1342.svg' />
                <h1 className='text-xl uppercase'>My Profile</h1>
            </div>
        </div>
        <div style={{backgroundColor: 'white'}} className='ml-20 mt-5 p-5 mb-20 rounded-md'>
            <h1 className='text-start text-xl uppercase'>Categories</h1>
            {list.map(category => 
                <div className='flex flex-row flex-wrap'>
                    <p style={{backgroundColor: '#efefef'}} className='m-1 text-sm font-light p-1 px-2 rounded-lg'>
                        {category}
                    </p>
                </div>
                )}
        </div>
    </div>
  )
}

export default LeftNavBar