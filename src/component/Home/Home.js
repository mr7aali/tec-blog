import React from 'react';
import Banner from './Banner/Banner';
import Posts from './Posts/Posts';

const Home = () => {
    return (
        <div>
           <Banner/>
           <div className='bg-[#f0f0f2f5] mb-12'>
                <h1 className='text-3xl font-bold p-12 max-w-screen-lg	mx-auto'>Blog</h1>
            </div>
           <Posts/>
        </div>
    );
};

export default Home;