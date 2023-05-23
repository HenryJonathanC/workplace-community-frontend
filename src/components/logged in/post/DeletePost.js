import { message } from 'antd'
import axios from 'axios'
import React from 'react'

const DeletePost = ({handleCancel2, post}) => {

    const handleDelete = async () =>{
        // console.log(post._id)
        axios.delete(`http://localhost:3001/posts/delete/${post._id}`)
        .then((res) =>{
            console.log(res.data);
            handleCancel2()
            message.info('Post deleted successfully')
        })
        .catch(err=>console.log(err))


    }
  return (
    <div className='flex flex-col justify-center items-center'>
        <svg className='w-10' id="exclamation-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#E40000" d="M12,14a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,14Zm0-1.5a1,1,0,0,0,1-1v-3a1,1,0,0,0-2,0v3A1,1,0,0,0,12,12.5ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"></path></svg>
        <h1>Are you sure you want to delete this post?</h1><br/>
        <hr className='w-full m-0'/>
        <div className='flex justify-around items-center w-full mt-1'>
            <h1 onClick={handleCancel2} className='w-1/2 text-center cursor-pointer h-7 mt-2 font-semibold'>Cancel</h1>
            <h1 onClick={handleDelete} className='w-1/2 text-center cursor-pointer h-7 mt-2 font-semibold text-signInActive'>Yes, I'm sure</h1>
        </div>
    </div>
  )
}

export default DeletePost
