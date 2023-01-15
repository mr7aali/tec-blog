import React from 'react';
import './Blog.css'
import BlogCard from './BlogCard/BlogCard';
const Blog = () => {
    return (
        <div className='Full-blog-container'>
            <div className='bg-[#f0f0f2f5] mb-12'>
                <h1 className='text-3xl font-bold p-12 max-w-screen-lg	mx-auto'>Blog</h1>
            </div>
            <BlogCard/>
            <BlogCard/>
            
        </div>
    );
};

export default Blog;