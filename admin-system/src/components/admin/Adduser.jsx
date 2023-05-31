import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { registerAgent,reset } from '../../features/agents/agentSlice'

function Adduser() {
  const[formData, setFormData] = useState({
    agency:'',
    location:'',
    address:'',
    contacts:'',
    email:''
})
const {agency,location,address,contacts,email} = formData
const dispatch = useDispatch()
const navigate = useNavigate()
const {isLoading,isSuccess,isError,message}=useSelector((state)=>state.agents)
useEffect(()=>{
  if(isError){
    toast.error(message)
  }
  if(isSuccess){
    toast.success(message)
    navigate('/')
  }
},[isError,isSuccess,message])
function onSubmit(e){
  e.preventDefault()
 
  
    const userData={
      agency,
      location,
      address,
      contacts,
      email,
    }
    dispatch(registerAgent(userData))
  
 
}

const onChange = (e)=>{
  setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
  }))
}

 
if(isLoading){
  toast.info("Uploading...")
}
  return (
    <div className='flex justify-center m-3'>

    <form onSubmit={onSubmit} className='shadow-sm shadow-black w-[400px] h-[450px] p-5'>
        <h1 className='font-black text-3xl w-full flex  justify-center '> Register Agent</h1>
        <div className='border-t-2 mt-3 text-center'>
            <input type="text" 
            placeholder='Agency' 
             id='agency' 
             name='agency'
             value={agency}
              onChange={onChange} 
              className='border-b-[1px] my-5 border-black text-left w-full'/>
          
            <input type="text" 
            placeholder='Location'
             id='location' 
             name='location'
             value={location} 
             onChange={onChange}
             className='border-b-[1px] my-5 border-black text-left w-full'/>
            <input type="text" 
            placeholder='address' 
            id='address'
            name='address' 
            value={address} 
            onChange={onChange}
            className='border-b-[1px] my-5 border-black text-left w-full'/>
            <input type="text" 
            placeholder='contacts' 
            id='contacts'
            name='contacts' 
            value={contacts} 
            onChange={onChange}
            className='border-b-[1px] my-5 border-black text-left w-full'/>
            
            <input type="email" 
            placeholder='email' 
            id='email'
            name='email' 
            value={email} 
            onChange={onChange}
            className='border-b-[1px] my-5 border-black text-left w-full'/>

        </div>
        <button type='submit' 
        className='w-full bg-blue-600 text-2xl font-semibold p-2 rounded-md text-white'>
            submit
        </button>
         
    </form>
</div>
  )
}

export default Adduser