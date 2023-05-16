import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const LeftNavBar = ({ flag }) => {

const list = [ 'Advice Needed', 'Asking For A Colleague..', 'Ask Me Anything', 'Bluecollar Community', 'Burning Issues', 'Career Advice', 'Changemaking', 'Communities', 'Company News', 'Confessions', 'Crazy Ideas', 'Culture', 'Customer Experience', 'Dear CEO...', 'Dept to Dept...', 'Diversity & Inclusion', 'Ethics & Misconduct', 'Exit Interview', 'Fairness & Equity', 'Feels' ]
// const selectedStyle = {
//     background: '#03c5cc',
//     background: 'linear-gradient(90deg,#03c5cc 0,#2b57a8)',
//     color: 'white'
// }

useEffect(()=>{
    if(flag == 'Feed'){
        document.getElementById('feed').style.background='linear-gradient(90deg,#03c5cc 0,#2b57a8)'
        document.getElementById('feed-text').style.color = 'white'
    }else if(flag == 'Leaderboard'){
        document.getElementById('leader').style.background='linear-gradient(90deg,#03c5cc 0,#2b57a8)'
        document.getElementById('leader-text').style.color = 'white'
    }
    else if(flag == 'Profile'){
        document.getElementById('profile').style.background='linear-gradient(90deg,#03c5cc 0,#2b57a8)'
        document.getElementById('profile-text').style.color = 'white'
    }
}, [])

return (
    <div style={{flex: .23}} className='ml-5 mt-16 '>
        {/* {console.log(flag)} */}
        <div style={{backgroundColor: 'white'}} className='flex flex-col items-start ml-20 mt-5 p-5 mb-5 rounded-md shadow'>
            <Link to='/home'>
                <div id='feed' className='flex mb-3 w-52 py-1 pl-2 rounded-md'>
                    <img className='w-4 mr-3 cursor-pointer' src='https://www.svgrepo.com/show/483341/home.svg' alt='' />
                    <h1 id='feed-text' className='text-xl uppercase cursor-pointer'>My Feed</h1>
                </div>
            </Link>
            <Link to='/leaderboard'>
                <div id='leader' className='flex mb-3 w-52 py-1 pl-2 rounded-md'>
                    <img className='w-4 mr-3 cursor-pointer' src='https://www.svgrepo.com/show/488260/leaderboard.svg' alt='' />
                    <h1 id='leader-text' className='text-xl uppercase cursor-pointer'>Leaderboard</h1>
                </div>
            </Link>
            <Link to='/my-profile'>
                <div id='profile' className='flex mb-3 w-52 py-1 pl-2 rounded-md'>
                    <img className='w-4 mr-3 cursor-pointer' src='https://www.svgrepo.com/show/512729/profile-round-1342.svg' alt='' />
                    <h1 id='profile-text' className='text-xl uppercase cursor-pointer'>My Profile</h1>
                </div>
            </Link>
        </div>
        <div style={{backgroundColor: 'white'}} className='ml-20 mt-5 p-5 mb-20 rounded-md shadow'>
            <h1 className='text-start text-xl uppercase mb-2'>Categories</h1>
            <div className='flex flex-row flex-wrap'>
                {list.map(category =>  
                    <button key={list.indexOf(category)} className=' text-start cursor-pointer m-1 mb-2 text-xs font-light p-1 px-2 rounded categories-btn'>
                        {category}
                    </button>
                )}
            </div>
        </div>
    </div>
  )
}

export default LeftNavBar