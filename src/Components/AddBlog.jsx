import React from 'react'
import './AddBlog.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddBlog = () => {
    const [title,setTitle]=useState('');
    const [description,setDescription] = useState('');
    const [success,setSuccess] = useState(false);
    console.log("data");
    var blog=[];
    const nav=useNavigate()
    const submit=()=>{
        var data=localStorage.getItem('blog');
        if(data){
            data=JSON.parse(data);
            data.push({title:title,description:description});
            localStorage.setItem('blog', JSON.stringify(data));
        }
        else{
            data=[{title:title,description:description}];
            localStorage.setItem('blog', JSON.stringify(data));
        }
        setSuccess(true);
        setTimeout(()=>{
            setSuccess(false);
            nav('/');
        },2000);
        
        
    }

   return (
    <div className="container " >
        {success && <div className='success-message'> ✔ Blog Added Successfully!</div>}
        
       <div className={success?"blur-background":""}>
        <h1>Create Your Blog</h1>
        <button className="btn-create">Create Blog</button>
        
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title"onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" rows="6" onChange={(e)=>setDescription(e.target.value)}></textarea>
            <button type="submit" onClick={submit}>Submit</button>
        </div>  
    </div>
    </div>
  )
}

export default AddBlog
