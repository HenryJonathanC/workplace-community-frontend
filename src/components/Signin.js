import './Signin.css'
import NewUser from './NewUser';
import User from './User';

const Signin = ({isUser, setIsUser}) => {

  const styleSelected = {
    color: "#03c5cc"
  }

  const styleNotSelected = {
    color: "#6c757d"
  }

  return (
    <div className=' w-fit flex flex-col justify-center items-center'>
        <div className='bg-white rounded-3xl'>
            <div className="buttons flex justify-around rounded-t-3xl">
              {
                isUser ? 
                <>
                  <button style={styleSelected} onClick={()=>setIsUser(true)} className='font-medium py-5 px-24'>Sign-In</button>
                  <button style={styleNotSelected} onClick={()=>setIsUser(false)} className='font-medium py-5 px-24'>Sign-Up</button>
                </> : 
                <>
                  <button style={styleNotSelected} onClick={()=>setIsUser(true)} className='font-medium py-5 px-24'>Sign-In</button>
                  <button style={styleSelected} onClick={()=>setIsUser(false)} className='font-medium py-5 px-24'>Sign-Up</button>
                </>
              }
              {/* <button style={styleSelected} onClick={()=>setIsUser(true)} className='font-medium py-5 px-24'>Sign-In</button>
              <button style={styleNotSelected} onClick={()=>setIsUser(false)} className='font-medium py-5 px-24'>Sign-Up</button> */}
                
            </div>
            <div>
                {isUser? <User /> : <NewUser />}                         
            </div>
        </div>
    </div>

  )
}

export default Signin