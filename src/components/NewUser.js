import { Modal } from 'antd';
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import OtpVerification from './OtpVerification';
import { getEmail } from '../store/reducer';
import { useDispatch } from 'react-redux';

const NewUser = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const showModal = () => {
      setIsModalOpen(true);
    };  
    const showModal1 = () => {
        setIsModalOpen1(true);
    };    
    const showModal2 = () => {
        setIsModalOpen2(true);
    };       
    const handleCancel = () =>{
        setIsModalOpen(false);
    }
    const handleCancel1 = () =>{
        setIsModalOpen1(false);
    }
    const handleCancel2 = () =>{
        setIsModalOpen2(false);
    }
    
    const handleSubmit = async e =>{
        e.preventDefault();
        await axios.post('http://localhost:3001/otp', { 
            "email" : `${email}`
        }).then(()=>{
            console.log(`otp sent successfully to ${email}`)
            dispatch(getEmail(email))
            navigate('/signUp/otp')
        }).catch((err)=>console.log(err))
    }
  return (
    <>
        <h1 className='text-black mb-5 pt-9 font-semibold'>Join Your Colleagues</h1>
        <form onSubmit={handleSubmit} className='flex flex-col mb-8'>
            <label className='mx-12 self-start font-light text-base' htmlFor='email'>Work email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} className='mx-12 border-color font-light text-xm px-2 focus' name='email' type='email' placeholder='example: john@theragency.com' required />
            <div className='flex mr-11'>    
                <p className='ml-12 mr-1 self-start font-light text-base my-4'>🧙‍♂️ Your work email is only used to confirm which space you belong to</p>
                <sup><svg onClick={showModal} className='w-4 cursor-pointer mt-5' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0092E4" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></sup>
                <Modal title="🧙‍♂️ Colleagues Only" width={1000} open={isModalOpen} footer={null} onCancel={handleCancel}>
                    <p>Loominate is a place for coworkers of the same organization. We group colleagues into the same private space (eg. acme.loominate.app) based on the work email used during sign-up (@acme.com).</p> <br/>
                    <p>All users go through the same verification process.</p> <br />
                    <p>Note: Loominate is an independent, employee-driven platform and is not affiliated to your company or organization.</p>
                </Modal>
            </div>
            <div className='flex mr-11'>    
                <p className='ml-12 mr-1 self-start font-light text-base my-4'>🔐 Your identity is protected.</p>
                <sup><svg onClick={showModal1} className='w-4 cursor-pointer mt-5' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0092E4" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></sup>
                <Modal title="🔐 Safety" width={1000} open={isModalOpen1} footer={null} onCancel={handleCancel1}>
                    <p>Your work email is immediately one-way hashed and held separately from the account that you are about to create.</p> <br/>
                    <p>This means that there is no way for your organization to trace your username or activity back to your work email.</p> <br />
                    <p>Our secure system provides the true psychological safety required for colleagues to speak openly and honestly.</p>
                </Modal>
            </div>
            <div className='flex mr-11'>    
                <p className='ml-12 mr-1 self-start font-light text-base my-4'>🦄 Just be yourself... and get rewarded for it!</p>
                <sup><svg onClick={showModal2} className='w-4 cursor-pointer mt-5' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0092E4" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></sup>
                <Modal title="🦄 The only place to just be yourself" width={1000} open={isModalOpen2} footer={null} onCancel={handleCancel2}> 
                    <p>Loominate is an alias-based platform where staff can...</p> <br/>
                    <ul className='list-disc ml-5'>
                        <li className='my-2'>Connect across hierarchies and divisions to trade battle stories and exchange thoughts on company issues.</li>
                        <li className='my-2'>Get honest answers about layoffs, mental health, salaries, and career progression.</li>
                        <li className='my-2'>Have a voice and be counted by joining staff campaigns and petitions - bring light to widespread concerns or make a brilliant staff idea go viral so that leaders sit up and listen!</li>
                        <li className='my-2'>Be vulnerable - speak up on your struggles and get upvoted support from colleagues who have been through it.</li>
                        <li className='my-2'>Most importantly, earn rewards and reputation for creating a kinder, more joyful workplace. Join to see how!</li>
                    </ul>
                </Modal>
            </div>
            <button className='mx-12 mt-9 py-2 rounded-lg bg-gradient-to-r from-signInActive to-buttonRight cursor-pointer button-color' type='submit'>VERIFY</button>
        </form>
    </>
  )
}

export default NewUser