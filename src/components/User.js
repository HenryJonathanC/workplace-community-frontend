import { Input, Space } from 'antd'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../store/userReducer';


const User = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(`User : ${username}`)
        // console.log(`Password : ${password}`)
        axios.post('http://localhost:3001/auth/Login', {
          "email": `${username}`,
          "password": `${password}`
        })
          .then(res=> {
            console.log(res.data)
            console.log("User Logged in successfully")
            dispatch(getUser(res.data))
            navigate('/home')
          })
          .catch(err => {
            console.log(err.message + " | Wrong username or password")
            alert("Wrong Credentials")
          })
    }
  return (
    <>
        <h1 className='text-black mb-5 pt-9 font-semibold'>soombo Coworker's Community</h1>
        <form onSubmit={handleSubmit} className='flex flex-col mb-8'>
            <label className='mx-12 self-start font-light text-base' htmlFor='username'>Email ID</label>
            <input value={username} required onChange={e=> setUsername(e.target.value)} className='mx-12 border-color font-light text-xm px-2' name='username' type='text' placeholder='Your pseudonym' />
            <label className='mx-12 mt-5 self-start font-light text-base' htmlFor='password'>Password</label>
            <input value={password} required onChange={e=> setPassword(e.target.value)} className='mx-12 border-color font-light text-xm px-2' name='password' type='password' placeholder='*****' />
            {/* <Space >
              <Input.Password
                className='mx-12 border-color font-light text-xm px-2'
                placeholder="input password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Space> */}
            <a href='#' className='mx-12 my-7 self-start cursor-pointer underline link-color'>Forgot password?</a>
            <button className='mx-12 py-2 rounded-lg bg-gradient-to-r from-signInActive to-buttonRight cursor-pointer button-color' type='submit'>NEXT</button>
        </form>
    </>
  )
}

export default User