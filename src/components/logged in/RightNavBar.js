import { Modal } from 'antd'
import React, { useState } from 'react'

const RightNavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };  
      const handleOk = () => {
        setIsModalOpen(false);
      };  
      const handleCancel = () => {
        setIsModalOpen(false);
      };

  return (
    <div style={{flex: .35}} className='mt-20'>
        <div style={{backgroundColor: 'white'}} className='ml-20 mr-20 mt-5 p-5 mb-5 rounded-md'>
            <div className='flex mb-6'>
                <h1 className='uppercase text-xl'>My Coworker Community</h1>
                <svg onClick={showModal} className='w-5 ml-1 cursor-pointer' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0092E4" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg>
                <Modal title="🧙‍♂️ Colleagues Only" width={1000} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p>Loominate is a place for coworkers of the same organization. We group colleagues into the same space (eg. acme.loominate.app) based on the work email used during sign-up (@acme.com). All users have gone through the same verification process.</p> <br/>
                        <p>The platform is independent and not affiliated to your company or organization.</p> <br />
                        <p>With our identity protection measures, this means you can speak freely without the fear of judgment or damaging your career. So be yourself and connect with new colleagues... wherever they may be!</p>
                </Modal>
            </div>
            <div className='flex items-center'>
                <img className='w-16 mr-6 rounded-full' src='https://soombo.loominate.app/static/media/avatar-company.bf9e77bc.png' />
                <h1 className='text-lg font-bold'>soombo</h1>
            </div>
        </div>
        <div style={{backgroundColor: 'white'}} className='ml-20 mr-20 mt-5 p-5 mb-5 rounded-md'>
            <h1 className='text-start uppercase text-xl'>My profile</h1>
        </div>
        <div className='ml-20 mr-20 mt-5 p-5 mb-5 rounded-md bg-gradient-to-r from-signInActive to-rightBetween'>
            <h1 style={{color: 'white'}} className='text-start text-xl mb-2'>About</h1>
            <p style={{color: 'white'}} className='text-start' >Loominate is a place to be your magical self. Ask those silly questions, seek support for your struggles, join moonshot ideas and be the changemaker!</p>
        </div>
        <div style={{backgroundColor: 'white'}} className='ml-20 mr-20 mt-5 p-5 mb-5 rounded-md'>
            <h1 className='text-start uppercase text-xl'>guidelines</h1>
        </div>
        <div style={{backgroundColor: 'white'}} className='ml-20 mr-20 mt-5 p-5 mb-5 rounded-md'>
            <h1 className='text-start text-xl mb-2'>Our culture is community moderated, help flag:</h1>
            <ul>
                <li className='text-start'>Naming of individual staff members</li>
                <li className='text-start'>Discrimination, Hate Speech or Profanity</li>
                <li className='text-start'>Bullying, Harassment or Trolling</li>
                <li className='text-start'>Sensitive information</li>
                <li className='text-start'>Inappropriate content or Spam</li>
            </ul>
        </div>
    </div>
  )
}

export default RightNavBar