import React from 'react';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark,handleMarkAsRead }) => {

    return (
        <div>
            <h1>{blog.id}</h1>

            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={blog.coverPhoto}
                        alt="Shoes" />
                </figure>

                <div className="card-body">

                    <div className="author">
                        <div className='flex justify-around items-center'>
                            <h3 >{blog.authoreName}</h3>
                            <img className='rounded-[50%] w-[80px]' src={blog.authorImage} alt="" />
                            <button onClick={() => handleBookMark(blog)}  > <FaRegBookmark size={30} /></button>
                        </div>

                    </div>
          <h2 className="card-title">{blog.title}</h2>
                    <p>{blog.description}</p>

          <div className='flex'>
                 {
                  blog.hashtag.map((has) => <p key={has}>{has}</p>)
               }
             </div>

              <div className="card-actions justify-end">

         <button onClick={()=>handleMarkAsRead(blog.readingTime, blog.id)} className="btn btn-primary">Mark as read</button>

                        
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Blog;