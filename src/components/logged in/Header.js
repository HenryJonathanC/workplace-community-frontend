import React, {useState} from 'react'
import { Modal } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import Invite from './Invite';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/userReducer';


const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector(state=>state.userData.user)
  
  const showModal = () => {
    setIsModalOpen(true);
  };  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal1 = () => {
    setIsModalOpen1(true);
  };  
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  const helpSubmit = (e) => {
    e.preventDefault();
    console.log(userData)
  }

  const logoutHandler = (e) => {
    dispatch(getUser(null))
    navigate('/signin')
  }

  const handleUserLogOut = () =>{
    alert('User not logged in');
    // navigate('/signin')
  }

  return (
    <>
      {userData? 
        <div style={{zIndex: '99'}} className='flex min-w-full h-16 justify-between items-center bg-gradient-to-r from-signInActive to-buttonRight navbar fixed'>
          <Link to='/home'>
            <h1 style={{color: 'white'}} className='cursor-pointer text-2xl font-bold ml-20'>LOOMINATE</h1>
          </Link>
          <div style={{marginLeft: '-17rem'}} className='mb-12 mr-96'>
            <input style={{width: '40rem'}} className='absolute h-9 my-2 mr-10 font-light text-xm px-2 rounded-lg' type='text' placeholder='Search anything in feed...' />
            <svg style={{marginLeft: '38rem'}} className='w-5 mt-4 ml-96 absolute cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><path fill="#0092E4" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg>
          </div>
          <div className='flex justify-around m-2 mr-20'>
            <svg className='w-6 mx-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="comment"><path fill="#fff" d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg>
            <svg className='w-6 mx-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="bell"><path fill="#fff" d="M18,13.18V10a6,6,0,0,0-5-5.91V3a1,1,0,0,0-2,0V4.09A6,6,0,0,0,6,10v3.18A3,3,0,0,0,4,16v2a1,1,0,0,0,1,1H8.14a4,4,0,0,0,7.72,0H19a1,1,0,0,0,1-1V16A3,3,0,0,0,18,13.18ZM8,10a4,4,0,0,1,8,0v3H8Zm4,10a2,2,0,0,1-1.72-1h3.44A2,2,0,0,1,12,20Zm6-3H6V16a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"></path></svg>
            <img onClick={showModal} className='w-7 mx-2 cursor-pointer' src={userData.imgUrl} alt='' />
            {/* <svg onClick={showModal} className='w-6 mx-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="user-circle"><path fill="#fff" d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z"></path></svg> */}
            <Modal closable={false} width={195} open={isModalOpen} footer={null} onCancel={handleCancel} className='userModal'>
              <div className='flex mb-5 items-center'>
                <img className='w-9 h-9' src={userData.imgUrl} alt='' />
                <div className='ml-3 '>
                  <h1 className='text-base font-semibold'>{userData.username}</h1>
                  <p onClick={()=> navigate('/my-profile')} style={{color: 'purple'}} className='text-xs cursor-pointer'>My Profile</p>
                </div>
              </div>
              <Link to='/invite'>
                <div className='flex mb-4 cursor-pointer'>
                  <svg className='w-4 mr-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="users-alt"><path fill="black" d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z"></path></svg>
                  <p className='font-semibold uppercase text-xs'>Invite Colleagues</p> 
                </div>
              </Link>
              <Link to='/settings'>
                <div className='flex mb-4 cursor-pointer'>
                  <svg className='w-4 mr-3' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="setting"><path fill="black" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9-1.28 2.22-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24-1.3-2.21.8-.9a3 3 0 0 0 0-4l-.8-.9 1.28-2.2 1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24 1.28 2.22-.8.9a3 3 0 0 0 0 3.98Zm-6.77-6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"></path></svg>
                  <p className='font-semibold uppercase text-xs'>Settings</p>
                </div>
              </Link>
              <div onClick={showModal1} className='flex mb-4 cursor-pointer'>
                <img className='w-4 h-4 mr-3' src='https://cdn-icons-png.flaticon.com/512/25/25400.png?w=740&t=st=1683628464~exp=1683629064~hmac=8eb86805f80c6cb739a664c0a508bed6cd7ef90b72beab3aa8064ebfc3690691' />
                <p className='font-semibold uppercase text-xs'>Help & Support</p>
              </div>
              <Modal title="Need help & support?" closable={false} width={500} open={isModalOpen1} footer={null} onCancel={handleCancel1}>
                <form onSubmit={helpSubmit} className='flex flex-col mb-8'>
                  <input className='mx-12 mt-3 mb-7 border-color font-light text-lg px-2' name='name' type='text' placeholder='Name' />
                  <input  className='mx-12 mb-7 border-color font-light text-lg px-2' name='email' type='email' placeholder='Your email' />
                  <textarea rows={2} cols={1} style={{resize: 'none'}} className='mx-12 mb-7 border-color font-light text-lg px-2' placeholder='Tell us how we can help :)'/>
                  <button onClick={handleCancel1} className='mx-12 h-14 py-2 uppercase rounded-lg bg-gradient-to-r from-buttonRight to-gradientRight cursor-pointer button-color' type='submit'>send</button>
                </form>
              </Modal>
              <div onClick={logoutHandler} className='flex cursor-pointer'>
                <svg className='w-4 mr-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="signout"><path fill="black" d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"></path></svg>
                <p className='font-semibold uppercase text-xs'>Log Out</p>
              </div>
            </Modal>
          </div>
        </div>
      : handleUserLogOut() }
      
    </>
  )
}

export default Header