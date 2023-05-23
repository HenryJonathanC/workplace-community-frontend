import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { list } from './CategoriesList'
import Posts from './Posts';

const Categories = () => {
    const id= useParams()
    const [postData, setPostData] = useState();
    const [category, setCategory] = useState();
    const navigate = useNavigate()
    // const [idstate, setIdstate] = useState(id)
    // console.log("outside use",idstate)




    useEffect(()=>{
        getCategory()
    //   console.log(category.category)
    }, [id])

    const getCategory = async () =>{
        list.map(async category=> {
           (category.id === parseInt(id.id)) && 
             await getPosts(category.category);
             setCategory(category);
        })
    }
 
    const getPosts = async (categoryName) => {
        await axios.get('http://localhost:3001/posts')
             .then(res=>{
                 // console.log(res.data)
                //  console.log(categoryName)
                 let data = []
                 res.data.map(item=> (item.category === categoryName) && data.push(item))         
                 // console.log(data)
                 setPostData(data)
                 // console.log(postData);
             })
             .catch(err=>console.log(err))
     }

    //  console.log({postData})

      
  return (
    <div style={{flex: .45}} className='ml-8 mt-16'>{
        category && 
        <>
            <h1 onClick={() => navigate('/my-profile')} style={{color: '#4b008b'}} className='text-start mt-5 cursor-pointer'>My Profile / <span style={{color: '#6c757d'}} className='cursor-default'>{category.category}</span></h1>
            <div className='vignette mt-5 rounded-3xl w-full'>
                {category.img? <img style={{minHeight: '22rem'}} className='mt-5 object-cover object-top h-80 rounded-3xl w-full' src={category.img}  alt=''/> : <div style={{minHeight: '22rem'}} className='bg-buttonRight w-full rounded-3xl'></div>}          
            </div>
            <div className='flex items-center absolute bottom-60 z-10'>
                <Link to='/home' >
                    <svg className='w-10 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-left"><path fill="white" d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"></path></svg>
                </Link>
                <h1 style={{color: 'white'}} className='ml-1 text-xl font-medium'>{category.category}</h1>
                <button style={{color: 'white'}} className='ml-3 font-medium bg-gradient-to-r from-signInActive to-rightBetween rounded-lg px-2 py-1'>FOLLOW</button>
            </div>
            {postData?.reverse().map(post=>{
                    return (
                        <Posts key={post._id} post={post} />
                    )
                })
            }
        </>
    }
        
    </div>
  )
}

export default Categories