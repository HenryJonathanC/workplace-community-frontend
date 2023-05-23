import { Modal, message } from 'antd'
import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProfileSetup = () => {
    const avatars = ['https://gmail.loominate.app/static/media/avatar1.c1ae5e66.png', 'https://gmail.loominate.app/static/media/avatar2.9555ff10.png', 'https://gmail.loominate.app/static/media/avatar3.9d063941.png', 'https://gmail.loominate.app/static/media/avatar4.c2d5bd71.png', 'https://gmail.loominate.app/static/media/avatar5.95134f95.png', 'https://gmail.loominate.app/static/media/avatar6.ecbd59eb.png', 'https://gmail.loominate.app/static/media/avatar7.71317072.png', 'https://gmail.loominate.app/static/media/avatar8.9199c4e1.png', 'https://gmail.loominate.app/static/media/avatar9.740e86ee.png', 'https://gmail.loominate.app/static/media/avatar10.fbb0add0.png', 'https://gmail.loominate.app/static/media/avatar11.f3713fd6.png', 'https://gmail.loominate.app/static/media/avatar12.1dcaabee.png', 'https://gmail.loominate.app/static/media/avatar13.86350798.png', 'https://gmail.loominate.app/static/media/avatar14.b79ef3ff.png', 'https://gmail.loominate.app/static/media/avatar15.43ae6bcb.png']

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [imgURL, setImageURL] =useState('')
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const navigate = useNavigate();
    const userEmail = useSelector(state=> state.user.email)

    const showModal1 = () => {
        setIsModalOpen1(true);
    };   
    const handleCancel1 = () =>{
        setIsModalOpen1(false);
    }

    const handleClick = (e) =>{
        e.target.style.border == ".2rem solid rgba(52, 177, 235, 0.4)" ? (
            e.target.style.border = "0"
            ) : (
                e.target.style.border = ".2rem solid rgba(52, 177, 235, 0.4)" 
                )
    }

    const handleSubmit =async e =>{
        e.preventDefault();
        console.log(username+' '+password+' '+imgURL)
        await axios.post('http://localhost:3001/auth/register', {
            "email" : `${userEmail}`,
            "username": `${username}`,
            "password" : `${password}`,
            "imgUrl" : `${imgURL}`
        }).then(res=>{
            console.log(res.data)
            navigate('/signin')
            message.success('Successfully created user profile')
        }).catch(err=>console.log(err.message))
    }

  return (
    <div style={{backgroundColor: '#e9e9e9'}} className='min-h-screen h-fit w-screen flex items-center justify-around flex-wrap'>
        <img src='https://gmail.loominate.app/static/media/terms-monster.8eee51cb.png' alt='otp.png' className='h-56' />
        <div style={{width: '35rem'}} className='text-left'>
            <h1 className='text-2xl font-semibold'>Setup Your Profile</h1><br/>
            <form className='flex flex-col'>
                <div className='flex'>
                    <label style={{color: '#6a666e'}} htmlFor='username' className='font-medium mt-5'>Create Username</label>
                    <sup><svg onClick={showModal1} className='w-4 cursor-pointer mt-6 ml-2' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0092E4" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></sup>
                    <Modal title="Tips" width={1000} open={isModalOpen1} footer={null} onCancel={handleCancel1}>
                        <ul className='list-disc ml-5'>
                            <li className='my-2'>Be careful not include any words that may give away your identity if you wish to remain pseudonymous.</li>
                            <li className='my-2'>Usernames cannot be changed for the first 30 days.</li>
                            <li className='my-2'>You will be able to toggle between posting with your Username or as 'Anonymous'.</li>
                        </ul>    
                    </Modal>
                </div>
                <input required value={username} onChange={e=>setUsername(e.target.value)} name='username' style={{backgroundColor: '#e9e9e9'}} className='mt-3 border-color font-light text-xm px-2' />
                {/* <p style={{color: 'green'}} className='mt-5 font-medium'>Username is available</p> */}
                <label style={{color: '#6a666e'}} htmlFor='password' className='font-medium mt-6'>Password</label>
                <input type='password' required value={password} onChange={e=>setPassword(e.target.value)} name='password' style={{backgroundColor: '#e9e9e9'}} className='mt-3 border-color font-light text-xm px-2' />
                <p style={{color: '#6a666e'}} className='mt-6 font-medium'>Choose an avatar</p>
                {/* <img className='w-16' src='https://gmail.loominate.app/static/media/avatar15.43ae6bcb.png' /> */}
                <div  className='flex flex-wrap'>
                    {avatars.map(avatar=>{
                        return (
                            <img onClick={(e)=>{setImageURL(avatar); handleClick(e)}} key={avatars.indexOf(avatar)}  className='avatar rounded-full w-16 mx-5 my-3 cursor-pointer' src={avatar} alt='avatar.png' />
                        )
                    })}
                </div>
                <div className='mt-8 flex'>
                    <div onClick={()=>navigate('/signup/otp')} style={{borderColor: '#03c5cc'}} className='border-2 cursor-pointer w-fit rounded-lg px-4'>
                        <svg className='w-10 rounded' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="arrow-left"><path fill="#03c5cc" stroke='#e9e9e9' d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"></path></svg>
                    </div>
                    <button onClick={handleSubmit} type='submit' className='uppercase ml-12 py-2 rounded-lg bg-gradient-to-r from-signInActive to-rightBetween cursor-pointer button-color w-64'>create account</button>
                </div>
                <p className='text-sm mt-2 ml-5'>By continuing, you agree to our <span className='cursor-pointer' style={{color: '#885bb0'}}>Terms of Service</span> and <span className='cursor-pointer' style={{color: '#885bb0'}}>Privacy Policy</span>.</p>
            </form>
        </div>
    </div>
  )
}

export default ProfileSetup