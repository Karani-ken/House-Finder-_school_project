import React,{useState} from 'react'
import axios from 'axios'
const AddHouse = () => {
    const url = ('http://localhost:4000/api/house/add')
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [agent, setAgent] = useState("")
    const [price, setPrice] = useState("")
    const [filename,setFileName] = useState("")
    const [message, setMessage] = useState("")

    const onChangeFile=(e)=>{
        setFileName(e.target.files[0]);
    };
    const changeOnclick = (e)=>{
        e.preventDefault();

       
        
         const formData = new FormData();
        
        formData.append("title",title);
        formData.append("desc",desc);
        formData.append("agent",agent);
        formData.append("price",price);
        formData.append("houseImage",filename);

        console.log(formData);

        setTitle("");
        setDesc("");
        setAgent("");
        setPrice("");

        
        axios.post(`${url}` + formData)
            .then((res)=> {
                setMessage(res.data)
                
            })
            .catch((err)=>{
                console.log(err);
            });
             
             
             
       } 
      
    
  return (
    <div className='m-5 p-5  flex justify-center'>
       
        <span>{message}</span>
        <form onSubmit={changeOnclick} className=" border border-pink-700 rounded-xl shadow-md
         shadow-pink-700 w-56 " 
        encType="multipart/form-data" >
             <h1 className='text-2xl font-black'>Add new house</h1>
            <input type="text" className='border border-green-600 rounded-lg m-2 text-center'
            value={title} placeholder="title"
            onChange={(e) => setTitle(e.target.value)}/> <br/>
             <textarea type="text" className='border border-green-600 rounded-lg m-2 text-center'
              value={desc} placeholder="description"
            onChange={(e)=> setDesc(e.target.value)}>
                </textarea> <br/>
             <input type="text" className='border border-green-600 rounded-lg m-2 text-center'
             value={agent} placeholder="agent"
            onChange={(e)=> setAgent(e.target.value)}/> <br/>
             <input type="text" value={price} className='border border-green-600 rounded-lg m-2 text-center'
              placeholder="price"
            onChange={(e)=> setPrice(e.target.value)}/> <br/>
            <input type="number"  className='border border-green-600 rounded-lg m-2 text-center'
              placeholder="Quantity"/>
    
            <input type="file" filename="houseImage" className='border border-green-600 rounded-lg m-2 w-52 text-center'
            onChange={onChangeFile}/><br/>
        
            <button  type='submit' className='bg-emerald-500 w-32 rounded-lg m-3'> Post House</button>
        </form>
    </div>
  )
  }

export default AddHouse