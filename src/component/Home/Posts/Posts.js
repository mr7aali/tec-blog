import React from 'react';
import './Posts.css'
const Posts = () => {
    return (
        <div className='post-Container max-w-4xl mx-auto'>
            <div className='box-1'>
                <div className='card-img-container'>
                    <img src="https://i.ibb.co/85BT0Wh/demo-image-1-1230x615.jpg" alt="" srcset="" />
                    <div className='card1-blg'>
                        <h1>
                            <span className="post-text-underline">Beauty of deep space. Billions of galaxies in</span>
                        </h1>
                    </div>
                </div>
            </div>

            <div className='same-post-box'>
                <div className='same-post-box-img-container'>
                    <img src="https://i.ibb.co/85BT0Wh/demo-image-1-1230x615.jpg" alt="" srcset="" />
                </div>
                <div className='same-post-box-blg'>
                    {/* <h2 className=''>Rocket Lab mission fails shortly after launch</h2> */}
                    <h2 className=''>
                        <span className='post-text-underline2'>Rocket Lab mission fails shortly after launch</span>
                    </h2>
                </div>
            </div>
            
            <div className='same-post-box'>
                <div className='same-post-box-img-container'>
                    <img src="https://i.ibb.co/85BT0Wh/demo-image-1-1230x615.jpg" alt="" srcset="" />
                </div>
                <div className='same-post-box-blg'>
                    {/* <h2 className=''>Rocket Lab mission fails shortly after launch</h2> */}
                    <h2 className=''>
                        <span className='post-text-underline2'>Rocket Lab mission fails shortly after launch</span>
                    </h2>
                </div>
            </div>

            


        </div>
    );
};

export default Posts;