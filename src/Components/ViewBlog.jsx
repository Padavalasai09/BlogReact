import React from 'react'
import Header from './Header'

const ViewBlog = () => {
    const blog=JSON.parse(localStorage.getItem('selectedBlog')) ;


  return (
    <div>
      <Header/>
      <div class="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
        <marquee behavior="scroll" direction="left" class="text-lg font-semibold text-yellow-500 mb-4">
            Trending Blogs
        </marquee>

        <h1 class="h1 text-center text-2xl font-bold text-blue-700 mb-4" id="h1">{blog.title}</h1>

        <div class="bg-gray-200 p-6 rounded-lg shadow-md h-[500px] overflow-y-auto">
            <p class="text-lg text-gray-800 font-medium" id="blog-content">{blog.description}</p>
        </div>
    </div>
    </div>
  )
}

export default ViewBlog
