import React from 'react';
import './Show.css'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MainShower from '../Components/MainShower';
import SecondShower from '../Components/SecondShower';

const Show = () => {
    return (
        <>
        <Navbar/>
        <MainShower/>
        <SecondShower/>
        <Footer/>
        </>
    );
};

export default Show;