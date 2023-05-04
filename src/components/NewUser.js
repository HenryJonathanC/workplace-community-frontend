import { Modal } from 'antd';
import React, { useState } from 'react'

const NewUser = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [email, setEmail] = useState('')

    const showModal = () => {
      setIsModalOpen(true);
    };  
    const handleOk = () => {
      setIsModalOpen(false);
    };  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const showModal1 = () => {
        setIsModalOpen1(true);
    };    
    const handleOk1 = () => {
        setIsModalOpen1(false);
    };    
    const handleCancel1 = () => {
        setIsModalOpen1(false);
    };

    const showModal2 = () => {
        setIsModalOpen2(true);
    };    
    const handleOk2 = () => {
        setIsModalOpen2(false);
    };    
    const handleCancel2 = () => {
        setIsModalOpen2(false);
    };

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(`Email : ${email}`)
    }
  return (
    <>
        <h1 className='text-black mb-5 pt-9 font-semibold'>Join Your Colleagues</h1>
        <form onSubmit={handleSubmit} className='flex flex-col mb-8'>
            <label className='mx-12 self-start font-light text-base' htmlFor='email'>Work email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} className='mx-12 border-color font-light text-xm px-2 focus' name='email' type='email' placeholder='example: john@theragency.com' />
            <div className='flex mr-11'>    
                <p className='ml-12 mr-1 self-start font-light text-base py-4'>🧙‍♂️ Your work email is only used to confirm which space you belong to</p>
                <svg onClick={showModal} className='w-5 cursor-pointer' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0092E4" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg>
                <Modal title="🧙‍♂️ Colleagues Only" width={1000} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Loominate is a place for coworkers of the same organization. We group colleagues into the same private space (eg. acme.loominate.app) based on the work email used during sign-up (@acme.com).</p> <br/>
                    <p>All users go through the same verification process.</p> <br />
                    <p>Note: Loominate is an independent, employee-driven platform and is not affiliated to your company or organization.</p>
                </Modal>
            </div>
            <div className='flex mr-11'>    
                <p className='ml-12 mr-1 self-start font-light text-base py-4'>🔐 Your identity is protected.</p>
                <svg onClick={showModal1} className='w-5 cursor-pointer' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0092E4" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg>
                <Modal title="🔐 Safety" width={1000} open={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1}>
                    <p>Your work email is immediately one-way hashed and held separately from the account that you are about to create.</p> <br/>
                    <p>This means that there is no way for your organization to trace your username or activity back to your work email.</p> <br />
                    <p>Our secure system provides the true psychological safety required for colleagues to speak openly and honestly.</p>
                </Modal>
            </div>
            <div className='flex mr-11'>    
                <p className='ml-12 mr-1 self-start font-light text-base py-4'>🦄 Just be yourself... and get rewarded for it!</p>
                <svg onClick={showModal2} className='w-5 cursor-pointer' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0092E4" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg>
                <Modal title="🦄 The only place to just be yourself" width={1000} open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}>
                    <p>Loominate is an alias-based platform where staff can...</p> <br/>
                    <ul>
                        <li>Connect across hierarchies and divisions to trade battle stories and exchange thoughts on company issues.</li>
                        <li>Get honest answers about layoffs, mental health, salaries, and career progression.</li>
                        <li>Have a voice and be counted by joining staff campaigns and petitions - bring light to widespread concerns or make a brilliant staff idea go viral so that leaders sit up and listen!</li>
                        <li>Be vulnerable - speak up on your struggles and get upvoted support from colleagues who have been through it.</li>
                        <li>Most importantly, earn rewards and reputation for creating a kinder, more joyful workplace. Join to see how!</li>
                    </ul>
                </Modal>
            </div>
            <button className='mx-12 mt-9 py-2 rounded-lg bg-gradient-to-r from-signInActive to-buttonRight cursor-pointer button-color' type='submit'>VERIFY</button>
        </form>
    </>
  )
}

export default NewUser