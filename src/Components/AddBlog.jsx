import React from 'react'
import './AddBlog.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddBlog = () => {
    const [title,setTitle]=useState('');
    const [description,setDescription] = useState('');
    const [success,setSuccess] = useState(false);
    const [image,setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [error,setError] = useState(null);
    console.log("data");
    var blog=[];
    const nav=useNavigate()
    const submit=()=>{
        if(!title || !description || !image){
            setError('Please fill all the fields');
            setTimeout(()=>{
                setError(null);
            },2000);
            return;

        }

        var data=localStorage.getItem('blog');
        if(data){
            data=JSON.parse(data);
            var current_blog={title:title,description:description}
            console.log(imageFile);
            if(image){
                console.log(imageFile)
                console.log(imageFile)
                current_blog.image=imageFile 
            
            }
           
        //    console.log(image.name); 
            data.push(current_blog);                    
            localStorage.setItem('blog', JSON.stringify(data));
            
        }
        else{
            data=[{title:title,description:description}]; 
            if(image){
                console.log(imageFile)
                console.log(imageFile)
                data.image=imageFile    ;
            }                            
            localStorage.setItem('blog', JSON.stringify(data));
        }
        setSuccess(true);
        setTimeout(()=>{
            setSuccess(false);
            nav('/');
        },1000);
        
        
    }
    const handleImageChange = (e) => {
        const file=e.target.files[0]; 
        if(file){
            console.log(file);
            setImage(file); 
            setImageFile(URL.createObjectURL(file))
            console.log("Itis working fine")
        }
    }

   return (
    <div className="container " >
        {success && <div className='success-message'> ✔ Blog Added Successfully!</div>}
        
        
       <div className={success?"blur-background":""}>
        <h1>Create Your Blog</h1>
        <button className="btn-create">Create Blog</button>
        
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title"onChange={(e)=>setTitle(e.target.value) } />
        </div>
       
        <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" rows="6" onChange={(e)=>setDescription(e.target.value) }></textarea>
            
           
        </div>  
        <div>
                <label htmlFor="image">Upload Image</label>
                <input type="file" id="image" accept="image/*" onChange={(e)=>handleImageChange(e)} />
                {image && <img src={image} alt="preview" style={{ maxWidth: '200px', marginTop: '10px' }} />} 
        </div>
        

        <div className='mt-5'>
        {error && <div className="error-message">{error}</div>}
            <button type="submit" onClick={submit}>Submit</button>
        </div>
    </div>
    </div>
  )
}

export default AddBlog
