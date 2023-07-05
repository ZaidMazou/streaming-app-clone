import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import LivesNow from '../Components/LivesNow';
import MostPopular from '../Components/MostPopular';
import Movies from '../Components/Movies';
import LatestBangla from '../Components/LatestBangla';
import Navbar from '../Components/Navbar';

const Home = () => {
    return (
        <>
        <Navbar/>
        <Header/>
        <LivesNow/>
        <MostPopular/>
        <Movies/>
        <LatestBangla/>
        <Footer/>
        </>
    );
};

export default Home;