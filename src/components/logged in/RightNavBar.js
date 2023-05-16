import {  useSelector } from 'react-redux';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, Modal, theme } from 'antd'
import React, { useState } from 'react'
const { Panel } = Collapse;


const RightNavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
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

      const showModal2 = () => {
        setIsModalOpen2(true);
      };  
      const handleCancel2 = () => {
        setIsModalOpen2(false);
      };

      const onChangeCollapse = (key) => {
        console.log(key);
      };

      const { token } = theme.useToken();
      const panelStyle = {
        backgroundColor: 'white',
        // borderRadius: token.borderRadiusLG,
        border: 'none',
        textAlign: 'start',
        fontWeight: '600'
      }

  return (
    <div style={{flex: .32}} className='mt-16 ml-8 mr-5'>
        <div style={{backgroundColor: 'white'}} className='shadow mr-20 mt-5 p-5 mb-5 rounded-md'>
            <div className='flex mb-6'>
                <h1 className='uppercase text-xl'>My Coworker Community</h1>
                <sup><svg onClick={showModal} className='w-4 ml-1 cursor-pointer mt-1' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0092E4" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></sup>
                <Modal title="🧙‍♂️ Colleagues Only" width={1000} open={isModalOpen} footer={null} onCancel={handleCancel}>
                        <p>Loominate is a place for coworkers of the same organization. We group colleagues into the same space (eg. acme.loominate.app) based on the work email used during sign-up (@acme.com). All users have gone through the same verification process.</p> <br/>
                        <p>The platform is independent and not affiliated to your company or organization.</p> <br />
                        <p>With our identity protection measures, this means you can speak freely without the fear of judgment or damaging your career. So be yourself and connect with new colleagues... wherever they may be!</p>
                </Modal>
            </div>
            <div className='flex items-center'>
                <img className='w-16 mr-6 rounded-full' src='https://soombo.loominate.app/static/media/avatar-company.bf9e77bc.png' alt='' />
                <h1 className='text-lg font-bold'>soombo</h1>
            </div>
        </div>
        <div style={{backgroundColor: 'white'}} className='shadow mr-20 mt-5 p-5 rounded-md h-72 mb-10'>
            <h1 className='text-start uppercase text-xl mb-3'>My profile</h1>
            <div className='flex'>
                <img src={userData.imgUrl} alt='' className='mr-2 w-20' />
                <div className='flex flex-col'>
                    <h1 className='text-start font-medium text-xl'>{userData.username}</h1>
                    <p className='text-xs text-start mt-1'>Joined May 2023</p>
                </div>
            </div>
            <p className='text-start mt-3 mb-4'>Hello this is me!</p>
            <div className='flex justify-between'>
                <div style={{width: '5.7rem'}} className='flex flex-col bg-gradient-to-r from-signInActive to-rightBetween rounded-md'>
                    <sup><svg style={{position: 'absolute', left: '4.2rem', top: '.2rem', width: '.9rem'}} onClick={showModal1} className='w-4 ml-1 cursor-pointer mt-1' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></sup>
                    <Modal title="Karma Points" width={1000} open={isModalOpen1} footer={null} onCancel={handleCancel1}>
                            <p>Be rewarded for sharing content, giving helpful advice, or just being a dope colleague!</p> <br />
                            <ul className='list-disc'>
                                <li><span className='font-bold'>Earn</span> karma points for each<span style={{color: 'purple'}}> post created, upvoted comments</span> , or simply by <span style={{color: 'purple'}}>inviting other colleagues</span> to join this space</li>
                                <li><span className='font-bold'>Use</span> points to support <span style={{color: 'purple'}}>Initiatives you care about</span> (<span style={{color: 'purple'}}>vote FOR</span>) or to purchase perks and awards (coming soon!).</li>
                            </ul>
                    </Modal>
                    <h1 style={{color: 'yellow'}} className='mt-4 font-bold text-lg'>1</h1>
                    <p style={{color: 'white'}} className='text-sm'>Karma <br/>Points</p>
                </div>
                <div style={{backgroundColor: 'white'}} className='flex shadow p-5 rounded-md ml-3'>
                    <div style={{width: '4rem'}}>
                        <h1 className='mt-4 font-bold text-lg'>1</h1>
                        <p className='text-sm mb-2'>Posts</p>
                    </div>
                    <div style={{width: '4rem'}}>
                        <h1 className='mt-4 font-bold text-lg'>1</h1>
                        <p className='text-sm mb-2'>Polls</p>
                    </div>
                    <div style={{width: 'rem'}} >
                        <h1 className='mt-4 font-bold text-lg'>1</h1>
                        <sup><svg style={{position: 'absolute', left: '1.3rem', top: '-.2rem', width: '.8rem'}} onClick={showModal2} className='w-4 ml-1 cursor-pointer mt-1' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#4b008b" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></sup>
                        <Modal title="Initiatives" width={1000} open={isModalOpen2} footer={null} onCancel={handleCancel2}>
                                <p>Launch a campaign, petition or, heck, start a movement!</p> <br />
                                <p>Help spotlight workplace issues or amazing ideas by voting for Initiatives that resonate and share them with your colleagues to add their support.</p> <br />
                                <p>Fringe ideas, poor processes, widespread concerns... join voices and be heard!</p> <br/>
                                <p className='font-bold'>Earn :</p> <br/> 
                                <ul className='list-disc'>
                                    <li><span style={{color: 'purple'}} className='font-medium'>10 Karma points</span> for each <span style={{color: 'purple'}} className='font-medium'>Initiative</span> launched</li>
                                    <li><span style={{color: 'purple'}} className='font-medium'>2 Karma points</span> from each colleague that <span style={{color: 'purple'}} className='font-medium'>votes FOR</span></li>
                                </ul>
                        </Modal>
                        <p className='text-sm mb-2'>Initiatives</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='shadow mr-20 mt-5 p-5 mb-5 rounded-md bg-gradient-to-r from-signInActive to-rightBetween'>
            <h1 style={{color: 'white'}} className='bg-black text-start text-xl mb-2'>About</h1>
            <p style={{color: 'white'}} className='text-start' >Loominate is a place to be your magical self. Ask those silly questions, seek support for your struggles, join moonshot ideas and be the changemaker!</p>
        </div>
        <div style={{backgroundColor: 'white'}} className='shadow mr-20 mt-5 p-5 mb-5 rounded-md'>
            <h1 className='text-start uppercase text-xl'>guidelines</h1>
            <Collapse accordion bordered={false} onChange={onChangeCollapse} expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
                <Panel style={panelStyle} header="1. Be kind to each other" key="1">
                    <p className='font-normal'>The one simple rule to rule them all.</p>
                </Panel>
                <Panel style={panelStyle} header="2. Be constructive" key="2">
                    <p className='font-normal'>Your words and actions matter, and are representative of your organization’s culture. Solutions and ideas eat complaining for breakfast and help drive change.</p>
                </Panel>
                <Panel style={panelStyle} header="3. Unite" key="3">
                    <p className='font-normal'>The strength of our community comes from its diversity. Loominate weaves together the kindness and minds of colleagues from a wide range of backgrounds and beliefs. Use it to help shape your ideas and understanding. Not understanding someone’s viewpoint doesn’t mean that it’s wrong. Loominate is a place for rational discussion, debates and leveraging our differences!</p>
                </Panel>
            </Collapse>
        </div>
        <div style={{backgroundColor: 'white'}} className='shadow mr-20 mt-5 p-5 mb-5 rounded-md'>
            <h1 className='text-start text-xl mb-2'>Our culture is community moderated, help flag:</h1>
            <ul className='list-disc ml-9'>
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