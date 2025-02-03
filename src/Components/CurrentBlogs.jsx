import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const CurrentBlogs = () => {

    var data=JSON.parse(localStorage.getItem('blog'));
    console.log(data);
    const nav=useNavigate()
    const  viewBlog=(index)=>{
        var data=JSON.parse(localStorage.getItem('blog'));
        console.log(data,"blog");
        data.map((blog,i)=>{
                if(i===index){
                    // console.log(data[i]);
                    localStorage.setItem('selectedBlog',JSON.stringify(data[i]));
                    nav('/viewBlog')
                }
    
    })


    }
    const editBlog=(index)=>{
        localStorage.setItem('editBlog',JSON.stringify(index));
    }
  return (
    <div>
      
        <Link to='/addBlog' className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 cursor-pointer mt-8 ml-[1700px] block mr-8">
            + Add Blog
           
            </Link>
        
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {
                data.map((item,index)=>{
                    return(
                        <div className="card1 bg-white rounded-lg shadow-lg p-5 text-black transition-transform hover:scale-105" key={index}>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>

                        <p className="text-gray-700 text-sm h-24 overflow-hidden mb-4">
                            {item.description}
                        </p>

                    
                        <div className="flex gap-4">
                            <button
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                            onClick={() => viewBlog(index)}
                            >
                            View
                            </button>
                            <button
                            className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
                            onClick={() => editBlog(index)}
                            >
                            Edit
                            </button>
                            <button
                            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                            onClick={() => deleteBlog(index)}
                            >
                            Delete
                            </button>
                        </div>
                        </div>
                    )
                })
            }



        </div>
      
    </div>
  )
}

export default CurrentBlogs







