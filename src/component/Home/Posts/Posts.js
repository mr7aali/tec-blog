import { useQuery } from '@tanstack/react-query';
import React from 'react';
import './Posts.css'
const Posts = () => {



    const { data: Posts = [], refetch } = useQuery({
        queryKey: ['Posts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/post');
            const data = await res.json();
            return data;
        }
    })




    console.log(Posts)




    return (
        <div className='post-Container max-w-4xl mx-auto'>
            <div className='box-1'>
                <div className='card-img-container'>
                    <img src="https://i.ibb.co/85BT0Wh/demo-image-1-1230x615.jpg" alt="" srcSet="" />
                    <div className='card1-blg'>
                        <h1>
                            <span className="post-text-underline">Beauty of deep space. Billions of galaxies in</span>
                        </h1>
                    </div>
                </div>
            </div>






            {
                Posts?.map((p,i) =>
                    <>
                        <div className='same-post-box'>
                            <div className='same-post-box-img-container'>
                                <img src={p?.blogPicture} alt="" srcSet="" />
                            </div>
                            <div className='same-post-box-blg'>
                                <h2 className=''>
                                    <span className='post-text-underline2'>{p?.title}, {i}</span>
                                </h2>
                            </div>
                        </div>
                    </>
                   
                )
            }




        </div>
    );
};

export default Posts;