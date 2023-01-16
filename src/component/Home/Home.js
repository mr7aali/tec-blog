import React from 'react';
import Banner from './Banner/Banner';
import Posts from './Posts/Posts';

const Home = () => {
    return (
        <div style={{background:'#fff'}}>
           <Banner/>
           
           <Posts/>
        </div>
    );
};

export default Home;