import './Signin.css'
import NewUser from './NewUser';
import User from './User';

const Signin = ({isUser, setIsUser}) => {

  return (
    <div className=' w-fit flex flex-col justify-center items-center'>
        <div className='bg-white rounded-3xl'>
            <div className="buttons flex justify-around rounded-t-3xl">
                <button onClick={()=>setIsUser(true)} className='font-medium signIn py-5 px-24'>Sign-In</button>
                <button onClick={()=>setIsUser(false)} className='font-medium signUp py-5 px-24'>Sign-Up</button>
            </div>
            <div>
                {isUser? <User /> : <NewUser />}             
                
            </div>
        </div>
    </div>

  )
}

export default Signin