import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';



const Blogs = ({handleBookMark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])



    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    // console.log(blogs)




    return (
        <div className=' '>
            <h1 className='text-3xl'>Total:{blogs.length}</h1>

            <div className="all-blogs grid grid-cols-2">
                {
                    blogs.map((blog) => <Blog handleMarkAsRead={handleMarkAsRead}   handleBookMark={handleBookMark} blog={blog} key={blog.id}></Blog>)
                }
            </div>
        </div>

    );
};

export default Blogs;