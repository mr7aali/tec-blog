import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Page/Footer/Footer';
import Header from '../Page/Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;