import { borderRadius } from '@mui/system';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Page/Header/Header';
import './PostDetails.css'
const PostDetails = () => {
    const post = useLoaderData();
    console.log(post)
    return (
        <>
       
        <div className='PostDetails-container max-w-screen-md mx-auto mt-20 mb-16'>
            <div></div>
            
            <div className='PostDetails-Header'>
                <h1 className='font-bold text-5xl'>
                {post?.title}
                </h1>
            </div>
            <hr className='mx-auto' style={{border:'1px solid gray', marginTop:'50px', width:'90%', borderRadius:'50px'}} />
            <div className='postDetails-imgage-container mt-5'>
                <img src={post?.blogPicture} alt="" srcset="" />
            </div>
            <div className='postdetails-blog'>
                <h1>{post?.title}</h1>
                <p>{post?.blog}</p>
            </div>
        </div>
        </>
    );
};

export default PostDetails;