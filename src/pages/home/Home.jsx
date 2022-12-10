import React from 'react';
import Header from '../../components/header/Header';
import Listing from '../../components/listing/Listing';
import Sidebar from '../../components/sideBar/Sidebar';
import './Home.css'

const Home = () => {
    return (
        <>
            <Header />
            <div className='home-page'>
                <Listing />
                <Sidebar />
            </div>
        </>
    );
};

export default Home;