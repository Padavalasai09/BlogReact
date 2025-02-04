import React, { useEffect, useState } from 'react'
import './EditBlog.css'
import { useNavigate } from 'react-router-dom';
const EditBlog = () => {
    const nav=useNavigate()
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [error, setError] = useState(null);
    const blogs=JSON.parse(localStorage.getItem('blog'));
    const idx=JSON.parse(localStorage.getItem('editBlog'));
    const blog=blogs[idx];
    useEffect(()=>{

        setTitle(blog.title);
        setDescription(blog.description);
    },[])
    const changeData=()=>{
        if(!title || !description){
            setError('Please fill all the fields');
            setTimeout(()=>{
                setError(null);
            },2000);
            return;

        }
        blogs[idx].title=title;
        blogs[idx].description=description;
        console.log(blogs);
        localStorage.setItem('blog',JSON.stringify(blogs));
    
        nav('/')
    }
    



    
  return (
    <div className='bg-gray-50 flex justify-center items-center h-screen'>
        <div className="w-full sm:w-[500px] h-auto bg-white p-8 rounded-lg shadow-2xl">
        <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Edit Your Blog</h2>
            <p className="text-sm text-gray-500">Make changes to your blog's title and description.</p>
        </div>

        <form >
            <div className="mb-6">
                <label htmlFor="title" className="block text-lg font-semibold text-gray-700">Title</label>
                <input type="text" id="title" className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>

            <div className="mb-6">
                <label htmlFor="description" className="block text-lg font-semibold text-gray-700">Description</label>
                <textarea id="description" rows="6" className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter description" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="flex justify-between items-center">
            
                <button type="button" className="edit-btn bg-pink-600 text-white px-6 py-3 rounded-md w-full sm:w-auto hover:bg-pink-700 cursor-pointer font-bold mr-2" onClick={()=>{nav('/')}}>Cancel</button>
                <button type="submit" className="submit-btn bg-teal-500 text-white px-6 py-3 rounded-md w-full sm:w-auto hover:bg-teal-600 cursor-pointer font-bold" onClick={changeData}>Save Changes</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default EditBlog
