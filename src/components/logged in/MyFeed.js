import React, { useEffect, useState } from 'react'
import {  Button, Dropdown, Modal, Space, Tabs} from 'antd';
// import { useSelector } from 'react-redux';
import Polls from './Polls';
import Posts from './Posts';
import CreatePost from './post/CreatePost';
import CreatePoll from './post/CreatePoll';
import CreateInitative from './post/CreateInitative';
import axios from 'axios';


const MyFeed = () => {
  // const userData = useSelector(state=>state.userData.user)
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [postData, setPostData] = useState();

  
  const items = [
    {
      label: 'Recent',
      key: '1',
    },
    {
      label: 'Most liked',
      key: '2',
    },
    {
      label: 'Most Disliked',
      key: '3',
    }
  ];

  const handleMenuClick = (e) => {
    // message.info('Click on menu item.');
    // console.log('click', e);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const showModal1 = () => {
    setIsModalOpen1(true);
  };  
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  // const submit = () =>{

  // }

  const onChange = (key) => {
    // console.log(key);
  };

  const items1 = [
    {
      key: '1',
      label: `Posts`,
      children: <CreatePost handleCancel1={handleCancel1} />,
    },
    {
      key: '2',
      label: `Polls`,
      children: <CreatePoll handleCancel1={handleCancel1} />,
    },
    {
      key: '3',
      label: `Initatives`,
      children: <CreateInitative handleCancel1={handleCancel1} />,
    },
  ];

  useEffect(()=>{
    axios.get('http://localhost:3001/posts')
    .then(res=>{
      setPostData(res.data)
      console.log(res.data)
    })
    .catch(err=>console.log(err))
  },[postData])

  return (
    <div style={{flex: .45}} className='ml-8 mt-16'>
      <div onClick={showModal1} style={{backgroundColor: 'white'}} className='flex justify-between items-center w-full h-fit mt-5 p-5 mb-5 rounded-md shadow cursor-pointer'>
        <h1 className='w-32'>Post Something...</h1>
        <svg style={{}} className='' xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="plus"><path fill='rgb(3, 197, 204)' d="M17 2C8.716 2 2 8.716 2 17s6.716 15 15 15 15-6.716 15-15S25.284 2 17 2zm8 16h-7v7a1 1 0 0 1-2 0v-7H9a1 1 0 0 1 0-2h7V9a1 1 0 0 1 2 0v7h7a1 1 0 0 1 0 2z"></path></svg>
      </div>
      <Modal closable={false} width={800} open={isModalOpen1} footer={null} onCancel={handleCancel1}>
        <Tabs defaultActiveKey="1" items={items1} onChange={onChange} />
      </Modal>

      <div className='flex justify-between mt-5'>
        <div className='flex'>
          <h1 style={{backgroundColor: 'white'}} className='mr-2 px-4 py-2 p-5 rounded-md shadow cursor-pointer'>All</h1>
          <h1 style={{backgroundColor: 'white'}} className='mr-2 px-4 py-2 p-5 rounded-md shadow cursor-pointer'>Posts</h1>
          <h1 style={{backgroundColor: 'white'}} className='mr-2 px-4 py-2 p-5 rounded-md shadow cursor-pointer'>Polls</h1>
          <h1 style={{backgroundColor: 'white'}} className='mr-2 px-4 py-2 p-5 rounded-md shadow cursor-pointer'>Initiatives</h1>
        </div>
        <Space wrap>
          <Dropdown trigger={['click']} menu={menuProps}>
            <button style={{color: '#03c5cc', backgroundColor: 'white'}} className='flex px-4 py-2 p-5 rounded-md shadow cursor-pointer font-medium'>
                 Recent
                <svg className='w-5 ml-2 mt-1'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-down"><path fill="#03c5cc" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path></svg>
            </button>
          </Dropdown>
        </Space>
      </div>
      {/* <Posts /> */}
      {postData?.reverse().map(post=>{
        return (
          <Posts key={post._id} post={post} />
        )
      })
      }
      <Polls />
    </div>
  )
}

export default MyFeed