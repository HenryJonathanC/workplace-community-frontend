import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const MyProfile = () => {
  const userData=useSelector(state=>state.userData.user)
  const [year, setYear]= useState()
  const [month, setMonth]= useState()
  const [date, setDate]= useState()
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

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

  useEffect(()=>{
    const date=userData.createdAt.slice(0,10).split('-')
    setYear(date[0])
    setDate(date[2])
    switch (date[1]) {
        case '01':
            setMonth('January')
            break;
        case '02':
            setMonth('February')
            break;
        case '03':
            setMonth('March')
            break;
        case '04':
            setMonth('April')
            break;
        case '05':
            setMonth('May')
            break;
        case '06':
            setMonth('June')
            break;
        case '07':
            setMonth('July')
            break;
        case '08':
            setMonth('August')
            break;
        case '09':
            setMonth('September')
            break;
        case '10':
            setMonth('October')
            break;
        case '11':
            setMonth('November')
            break;
        case '12':
            setMonth('December')
            break;
        default:
            break;
    }
  }, [userData.createdAt])

  return (
    <div style={{flex: .45}} className='ml-8 mt-16'>
      <h1 style={{color: '#4b008b'}} className='text-start mt-5'>My Profile / <span style={{color: '#6c757d'}}>{userData.username}</span></h1>
      <div style={{backgroundColor: 'white'}} className='shadow mr-20 mt-5 p-5 rounded-3xl mb-10 w-full'>
            <h1 className='text-start uppercase text-xl mb-3'>My profile</h1>
            <div className='flex'>
                <img src={userData.imgUrl} alt='' className='mr-2 w-20' />
                <div className='flex flex-col'>
                    <h1 className='text-start font-medium text-xl'>{userData.username}</h1>
                    <p className='text-xs text-start mt-1'>Joined on {month} {date}, {year}</p>
                </div>
            </div>
            <p className='text-start mt-3 mb-4'>Hello this is me!</p>
            <div className='flex'>
                <div style={{width: '6.5rem', height: '4.2rem'}} className='flex flex-col bg-gradient-to-r from-buttonRight to-gradientRight rounded-md'>
                    <sup><svg style={{position: 'absolute', left: '5rem', top: '.2rem', width: '.9rem'}} onClick={showModal1} className='w-4 ml-1 cursor-pointer mt-1' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></sup>
                    <Modal title="Karma Points" width={1000} open={isModalOpen1} footer={null} onCancel={handleCancel1}>
                            <p>Be rewarded for sharing content, giving helpful advice, or just being a dope colleague!</p> <br />
                            <ul className='list-disc'>
                                <li><span className='font-bold'>Earn</span> karma points for each<span style={{color: 'purple'}}> post created, upvoted comments</span> , or simply by <span style={{color: 'purple'}}>inviting other colleagues</span> to join this space</li>
                                <li><span className='font-bold'>Use</span> points to support <span style={{color: 'purple'}}>Initiatives you care about</span> (<span style={{color: 'purple'}}>vote FOR</span>) or to purchase perks and awards (coming soon!).</li>
                            </ul>
                    </Modal>
                    <h1 style={{color: '#efff72'}} className='mt-1 font-bold text-lg'>1</h1>
                    <p style={{color: 'white'}} className='text-sm font-semibold'>Karma Points</p>
                </div>
                <div style={{backgroundColor: 'white', height: '4.2rem'}} className='flex shadow px-5 py-2 rounded-md ml-3'>
                    <div style={{width: '4rem'}}>
                        <h1 style={{color: '#ff2692'}} className='font-bold text-lg'>1</h1>
                        <p className='text-sm mb-2 font-semibold'>Posts</p>
                    </div>
                    <div style={{width: '4rem'}}>
                        <h1 style={{color: '#ff2692'}} className='font-bold text-lg'>1</h1>
                        <p className='text-sm mb-2 font-semibold'>Polls</p>
                    </div>
                    <div style={{width: 'rem'}} >
                        <h1 style={{color: '#ff2692'}} className='font-bold text-lg'>1</h1>
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
                        <p className='text-sm mb-2 font-semibold'>Initiatives</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile