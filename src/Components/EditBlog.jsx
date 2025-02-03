import React from 'react'
import './EditBlog.css'
const EditBlog = () => {
   



    
  return (
    <div className='bg-gray-50 flex justify-center items-center h-screen'>
        <div className="w-full sm:w-[500px] h-auto bg-white p-8 rounded-lg shadow-2xl">
        <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Edit Your Blog</h2>
            <p className="text-sm text-gray-500">Make changes to your blog's title and description.</p>
        </div>

        <form onsubmit="changeData(event)">
            <div className="mb-6">
                <label for="title" className="block text-lg font-semibold text-gray-700">Title</label>
                <input type="text" id="title" className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter title"/>
            </div>

            <div className="mb-6">
                <label for="description" className="block text-lg font-semibold text-gray-700">Description</label>
                <textarea id="description" rows="6" className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter description"></textarea>
            </div>

            <div className="flex justify-between items-center">
                <button type="button" className="edit-btn bg-pink-600 text-white px-6 py-3 rounded-md w-full sm:w-auto hover:bg-pink-700 cursor-pointer font-bold" onclick="window.location.href='/blog.html'">Cancel</button>
                <button type="submit" className="submit-btn bg-teal-500 text-white px-6 py-3 rounded-md w-full sm:w-auto hover:bg-teal-600 cursor-pointer font-bold" onclick="changeData()">Save Changes</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default EditBlog
