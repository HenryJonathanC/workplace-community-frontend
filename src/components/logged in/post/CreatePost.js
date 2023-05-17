import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Select } from 'antd';
import axios from 'axios';

const CreatePost = ({ handleCancel1 }) => {
  const userData = useSelector(state=>state.userData.user)
  const [image, setImage] = useState(null)
  const [isAddLink, setIsAddLink]= useState(false)
  const [isAddVideo, setIsAddVideo]= useState(false)

  const [title, setTitle] =useState('')
  const [body, setBody]= useState('')
  const [hashtags, setHashtags]= useState('')
  const [category, setCategory] = useState()
  const [link, setLink] = useState('')
  const [videoLink, setVideoLink] = useState('')
  const [publisher, setPublisher] = useState(`Publish as ${userData.username}`)


  const handleClick = () => {
    document.getElementById('upload').click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    console.log(image)
  };

  const items = [
    {
      label: userData.username,
      key: '1',
    },
    {
      label: 'Anonymous user',
      key: '2',
    }
  ];
  const lists = [ 'Advice Needed', 'Asking For A Colleague..', 'Ask Me Anything', 'Bluecollar Community', 'Burning Issues', 'Career Advice', 'Changemaking', 'Communities', 'Company News', 'Confessions', 'Crazy Ideas', 'Culture', 'Customer Experience', 'Dear CEO...', 'Dept to Dept...', 'Diversity & Inclusion', 'Ethics & Misconduct', 'Exit Interview', 'Fairness & Equity', 'Feels' ]

  const handleSubmit = e =>{
    e.preventDefault();
    console.log(title + body + hashtags + category + publisher + link + videoLink)
    let userid
    if(publisher==='Anonymous user'){
      userid=null;
    }else{
      userid=userData._id
    }
    axios.post('http://localhost:3001/posts', {
      "userId" : `${userid}`,
      "title" : `${title}`,
      "body" : `${body}`,
      "hashtags" : `${hashtags}`,
      "category" : `${category}`,
      "links" : `${link}`,
      "videoLink" : `${videoLink}`
    })

    setTitle('')
    setBody('')
    setHashtags('')
    setCategory('Select a category')
    setPublisher(`Publish as ${userData.username}`)
    setLink('')
    setVideoLink('')
    handleCancel1();
  }    


  return (
    <>
        <div className='mb-5 flex justify-between'>
            <h1 className='text-2xl font-medium'>Create Post</h1>
            <Select value={publisher} 
            onChange={val=>{
              setPublisher(val)}
              } 
            defaultValue={items[0].label} bordered={false} className='border-b' style={{width: '15rem', borderBottomWidth: '.05rem'}} placeholder='Select a category'>
              {items.map((item)=>{
                return <Select.Option value={item.label} style={{width: 'fit-content', color: '#03c5cc'}} key={item.key}>Publish as {item.label}</Select.Option>
              })}
            </Select>
          </div>
          <form>
            <input required value={title} onChange={e=>setTitle(e.target.value)} className=' mt-3 mb-7 border-post font-normal px-2 w-full' type='text' placeholder='Add your post title' />
            <textarea required value={body} onChange={e=>setBody(e.target.value)} rows={4} className='resize-none mt-3 mb-7 border-post w-full font-normal px-2' placeholder='What is in your mind?'></textarea>
            <input value={hashtags} onChange={e=>setHashtags(e.target.value)} style={{color: '#ff2692'}} className=' mt-3 mb-7 border-post font-normal px-2 w-full' type='text' placeholder='Your hashtags go here' />
            {isAddLink && 
                <input value={link} onChange={e=>setLink(e.target.value)} className=' mt-3 mb-7 border-post font-normal px-2 w-full' type='text' placeholder='Add Link' />
            }
            {isAddVideo &&
                <input value={videoLink} onChange={e=>setVideoLink(e.target.value)} className=' mt-3 mb-7 border-post font-normal px-2 w-full' type='text' placeholder='Add Video Link' />
            }
            <Select placeholder='Select a category' value={category} onChange={val=>setCategory(val)}  bordered={false} className='border-2 rounded-2xl' style={{width: '12rem', color: '#03c5cc'}} >
              {lists.map((item, i)=>{
                return <Select.Option value={item} style={{width: 'fit-content', color: '#03c5cc'}} key={i}>{item}</Select.Option>
              })}
            </Select>
          </form>
          {image && <img className=' mt-3 w-40 h-40' src={image} alt="Uploaded Image" />}
          <div className='flex justify-between w-full items-center'>
            <div className=' flex '>
                <svg onClick={()=> setImage(null)} className='w-6 mr-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="close"><path d="M19.8534546,19.1465454L12.7069092,12l7.1465454-7.1465454c0.1871948-0.1937256,0.1871948-0.5009155,0-0.6947021c-0.1918335-0.1986084-0.5083618-0.2041016-0.7069702-0.0122681l-7.1465454,7.1465454L4.8534546,4.1465454c-0.1937256-0.1871338-0.5009155-0.1871338-0.6947021,0C3.960144,4.3383789,3.9546509,4.6549072,4.1464844,4.8535156L11.2929688,12l-7.1464844,7.1464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C4,19.776062,4.223877,19.999939,4.5,20c0.1326294,0.0001221,0.2598267-0.0526123,0.3534546-0.1465454l7.1464844-7.1464844l7.1465454,7.1465454C19.2401123,19.9474487,19.3673706,20.0001831,19.5,20c0.1325073-0.000061,0.2595825-0.0526733,0.3533325-0.1463623C20.048645,19.6583862,20.0487061,19.3417969,19.8534546,19.1465454z"></path></svg>
                <svg onClick={handleClick} className='w-6 mr-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="images"><path d="M85 5H15C9.5 5 5 9.5 5 15v70c0 5.5 4.5 10 10 10h70c5.5 0 10-4.5 10-10V15c0-5.5-4.5-10-10-10zM15 91c-3.3 0-6-2.7-6-6v-8.2l24-25.9L71.6 91H15zm76-6c0 3.3-2.7 6-6 6h-7.9L48.3 61l22.2-23.1L91 60v25zm0-30.9L72 33.6l-.1-.1c-.1 0-.1-.1-.2-.1 0 0-.1-.1-.2-.1s-.1-.1-.2-.1-.1 0-.2-.1h-1.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1s-.1.1-.2.1-.1.1-.2.1l-.1.1-23.5 24.5-11.1-11.5s-.1 0-.1-.1c-.1-.1-.1-.1-.2-.1 0 0-.1-.1-.2-.1s-.1-.1-.2-.1-.1 0-.2-.1h-1.2c-.1 0-.1 0-.2.1-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1s-.1.1-.2.1c0 0-.1 0-.1.1L9 70.9V15c0-3.3 2.7-6 6-6h70c3.3 0 6 2.7 6 6v39.1zM27 17c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path></svg>
                <input type="file" id="upload" style={{ display: 'none' }} onChange={handleImageUpload} />
                <svg onClick={()=> setIsAddLink(true)} className='w-6 mr-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="link"><path d="M12.11,15.39,8.23,19.27a2.52,2.52,0,0,1-3.5,0,2.47,2.47,0,0,1,0-3.5l3.88-3.88a1,1,0,1,0-1.42-1.42L3.31,14.36a4.48,4.48,0,0,0,6.33,6.33l3.89-3.88a1,1,0,0,0-1.42-1.42ZM20.69,3.31a4.49,4.49,0,0,0-6.33,0L10.47,7.19a1,1,0,1,0,1.42,1.42l3.88-3.88a2.52,2.52,0,0,1,3.5,0,2.47,2.47,0,0,1,0,3.5l-3.88,3.88a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3.88-3.89A4.49,4.49,0,0,0,20.69,3.31ZM8.83,15.17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.92-4.92a1,1,0,1,0-1.42-1.42L8.83,13.75A1,1,0,0,0,8.83,15.17Z"></path></svg>
                <svg onClick={()=>setIsAddVideo(true)} className='w-6 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" id="video"><path d="M84.9 26.4L68 37.3V34c0-4.4-3.6-8-8-8H20c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-3.3l16.9 10.9c1.9 1 3.1-.7 3.1-1.7V28c0-1-1.1-2.8-3.1-1.6zM64 66c0 2.2-1.8 4-4 4H20c-2.2 0-4-1.8-4-4V34c0-2.2 1.8-4 4-4h40c2.2 0 4 1.8 4 4v32zm20 2.3L68 58V42l16-10.3v36.6z"></path><path fill="#00F" d="M1224-650v1684H-560V-650h1784m8-8H-568v1700h1800V-658z"></path></svg>
            </div>
            <button onClick={handleSubmit} style={{color: 'white'}} className='bg-gradient-to-r from-buttonRight to-gradientRight py-3 px-7 rounded-xl font-semibold'>POST</button>
          </div>
    </>
  )
}

export default CreatePost