import React, { useEffect, useState } from 'react'
import { Dropdown, Input, Button, message, Modal } from 'antd';
import { SendOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux';
import axios from 'axios';
import Editpost from './post/Editpost';
import DeletePost from './post/DeletePost';


const Posts = ({post}) => {

  const loggedInUserData = useSelector(state=>state.userData.user)
  const [postUser, setPostUser]= useState()
  const [likes, setLikes] = useState()
  const [messageApi, contextHolder] = message.useMessage()
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const findPostUser = async () =>{
    post.userId !== 'null' ? (
      await axios.post('http://localhost:3001/auth/postUser', {
        "_id" : `${post.userId}`
      })
      .then(res=>{setPostUser(res.data)})
      .catch(err=>console.log(err))
    ) : (
      setPostUser({
        username: "Anonymous User",
        imgUrl : 'https://img.freepik.com/free-icon/user_318-159711.jpg'
      })
    )
  }

  useEffect(()=>{
    // console.log(post)
    findPostUser();
  },[post])

  const copyLink = () => {
    navigator.clipboard.writeText('https://soombo.loominate.app');
    messageApi.open({
      type: 'success',
      content: 'Link copied successfully'
    })
  }

  // useEffect(()=>{
  //   if(post.likes.includes(loggedInUserData._id)){
  //     document.getElementById('thumbs-up').style.fill='blue'
  //   }
  // }, [])

  const showModal1 = () => {
    setIsModalOpen1(true);
  };  
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  const showModal2 = () => {
    setIsModalOpen2(true);
  };  
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

    const items = [
        {
        label: <>
                <h1 onClick={copyLink}>Share this post</h1>
              </>,
          key: '1',
        },
        postUser?._id=== loggedInUserData._id ?
          {
            label:<>
                    <h1 onClick={showModal1}>Edit your post</h1>
                    <Modal closable={false} width={500} open={isModalOpen1} footer={null} onCancel={handleCancel1}>
                      <Editpost handleCancel1={handleCancel1} post={post}/>
                    </Modal>
                  </>,
            key: '2',
          } : 
          {
            label:<>
                    <h1>Edit your post</h1>
                  </>,
            key: '2',
            disabled: 'true'
          },
        postUser?._id=== loggedInUserData._id ?
          {
            label:<>
                    <h1 onClick={showModal2}>Delete your post</h1>
                    <Modal closable={false} width={500} open={isModalOpen2} footer={null} onCancel={handleCancel2}>
                      <DeletePost handleCancel2={handleCancel2} post={post}/>
                    </Modal>
                  </>,
            key: '3',
          } : 
          {
            label:<>
                    <h1>Delete your post</h1>
                  </>,
            key: '3',
            disabled: 'true'
          },
      ];
    
      const suffix = (
        <Button 
          onClick={onclick}
          className="text-xs pr-1 "
            style={{
              color: 'white',
              borderRadius:"5rem",
              backgroundColor:"#198754",
              borderColor: "#198754",
            }}
        >POST <SendOutlined /> </Button>
      );

      const likeHandler = async () => {
        if(post.likes.includes(loggedInUserData._id)){
          console.log('user already liked')
        }else{
          axios.put('http://localhost:3001/posts/like', {
            "_id" : `${post._id}`,
            "user_id" : `${loggedInUserData._id}`
          })
          .then(res=>{setLikes(res.data.likes)})
          .catch(err=>console.log(err))
        }
      }

      const unlikeHandler = async () => {
        if(post.likes.includes(loggedInUserData._id)){ 
          axios.put('http://localhost:3001/posts/unlike', {
            "_id" : `${post._id}`,
            "user_id" : `${loggedInUserData._id}`
          })
          .then(res=>{setLikes(res.data.likes)})
          .catch(err=>console.log(err))
        }else{
          console.log('hello')
        }
      }
    
      const onClick = e =>{
        console.log(e.target.value)
      }
  return (
    <div style={{backgroundColor: 'white'}} className='flex flex-col items-start mt-5 p-5 mb-5 rounded-md shadow'>
        <div className='flex w-full justify-between'>
          <button className=' text-start cursor-pointer m-1 mb-2 text-xs font-light p-1 px-2 rounded categories-btn'>{post.category}</button>
          {contextHolder}
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            {/* <a onClick={(e) => e.preventDefault()}> */}
              {/* <Space> */}
                <svg className='w-6 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  id="ellipsis-v"><path fill="none" stroke='black' d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path></svg>
              {/* </Space> */}
            {/* </a> */}
          </Dropdown>
        </div>
        <div className='flex items-center'>
          {/* <svg style={{backgroundColor: ''}} className='w-10 mr-2 cursor-pointer rounded-full p-0' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="user-circle"><path fill="black" stroke='white' d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z"></path></svg> */}
          {postUser?._id=== loggedInUserData._id ? <img id='propic' className='w-12 h-12 mr-3' src={loggedInUserData?.imgUrl} alt=''/> : <img id='propic' className='w-12 h-12 mr-3' src={postUser?.imgUrl} alt=''/> } 
          <p>{postUser?.username}</p>
          {postUser?._id=== loggedInUserData._id && <p style={{color: '#ff2692'}} className='text-xs ml-4 border text-center px-2 rounded h-5 '>You</p> } 
          
        </div>
        <h1 className='mt-2 text-lg mb-5'>{post.title}</h1>
        <p>{post.body}</p>
        <p style={{color: ' #ff2692'}} className='mt-3'>#{post.hashtags}</p>
        <div className='flex mt-3'>
          {post?.likes?.includes(loggedInUserData._id)? 
            <svg onClick = {unlikeHandler} className='w-5 mr-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="thumbs-down"><path fill="black" d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z"></path></svg> 
            : 
            <svg onClick={likeHandler} className='w-5 mr-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="thumbs-up"><path fill="black" d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z"></path></svg> 
          }
          {/* <svg onClick={likeHandler} className='w-5 mr-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="thumbs-up"><path fill="black" d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z"></path></svg> */}
          {/* <svg onClick = {unlikeHandler} className='w-5 mr-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="thumbs-down"><path fill="black" d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z"></path></svg> */}
          <p className='mr-4'>{post.likes.length} Likes</p>
          <svg className='w-5 mr-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="comment"><path fill="black" d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg>
          <p>0</p>
        </div>
        <div className='mt-3 flex items-center w-full'>
          <img className='w-9 mr-3' src={loggedInUserData.imgUrl} alt=''/>
          <Input
            placeholder={'Comment as '+ loggedInUserData.username}
            enterbutton="Search"
            size="large"
            suffix={suffix}
            onClick={onClick}
            className="rounded-3xl"
          />
          {/* <textarea style={{width: '34rem'}} placeholder='Comment...' className='ml-12 px-5 h-12 transform-none resize-none pt-2 border rounded-full overflow-hidden absolute'></textarea>
          <button style={{marginLeft: '32.2rem', backgroundColor: '#198754', color: 'white'}} className='opacity-75 p-2 rounded-full flex absolute items-center'>Post<svg className='w-5 ml-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="message"><path fill="white" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"></path></svg></button> */}
        </div>
        <p style={{color: '#4b008b'}} className='self-center mt-5 font-medium text-sm'>View Comments</p>
      </div>
  )
}

export default Posts