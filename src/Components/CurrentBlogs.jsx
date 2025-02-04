import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Eye, Edit, Trash2 } from 'lucide-react'; 

const CurrentBlogs = () => {
    var data = JSON.parse(localStorage.getItem('blog')) || [];
   
    const nav = useNavigate();
    console.log(data);
    const viewBlog = (index) => {
        var data = JSON.parse(localStorage.getItem('blog'));
        data[index].views = (data[index].views || 0) + 1; 
        localStorage.setItem('blog', JSON.stringify(data));
        localStorage.setItem('selectedBlog', JSON.stringify(data[index]));
        nav('/viewBlog');
    };

    const editBlog = (index) => {
        localStorage.setItem('editBlog', JSON.stringify(index));
        nav('/editBlog');
    };

    const deleteBlog = (index) => {
        var new_data = data.filter((_, i) => i !== index);
        localStorage.setItem('blog', JSON.stringify(new_data));
        nav('/');
    };

    return (
        <div>
            <div className='flex justify-end p-4'>
                <Link 
                    to='/addBlog' 
                    className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 cursor-pointer ml-auto"
                >
                    + Add Blog
                </Link>
            </div>


            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div 
                            className="bg-white rounded-lg shadow-lg p-6 text-black transition-transform hover:scale-105 relative"
                            key={index}>

                            <div className="flex items-center gap-4 mb-4">
                                <img 
                                    src={item.profilePic || "https://tse2.mm.bing.net/th?id=OIP.XIEQoNCr2Qa2zWFYp1468wHaHa&pid=Api&P=0&h=180"} 
                                    alt="Profile"
                                    className="w-12 h-12 rounded-full border-2 border-gray-300"
                                />
                                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                            </div>

                            <p className="text-gray-700 text-sm h-24 overflow-hidden mb-4">
                                {item.description}
                            </p>
                            <div className="flex items-center gap-2 text-gray-600 text-sm absolute top-4 right-4">
                                <Eye size={18} />
                                <span>{item.views || 0} views</span>
                            </div>

                            <div className="flex gap-4 mt-4">
                                <button 
                                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                                    onClick={() => viewBlog(index)}
                                >
                                    <Eye size={18} />
                                    View
                                </button>

                                <button 
                                    className="flex items-center gap-2 bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
                                    onClick={() => editBlog(index)}
                                >
                                    <Edit size={18} />
                                    Edit
                                </button>

                                <button 
                                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                                    onClick={() => deleteBlog(index)}
                                >
                                    <Trash2 size={18} />
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center col-span-3 text-lg font-semibold bg-gray-100 py-4 rounded-lg shadow-md">
            🚀 No blogs available. Start writing now!
</p>

                )}
            </div>
        </div>
    );
};

export default CurrentBlogs;
