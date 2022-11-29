import React from 'react';
import Carusel from './Carusel';
import Category from './Category/Category';
import OnlyPic from './OnlyPic/OnlyPic';
import SideImgBanner from './SideImgBanner';

const Home = () => {
    return (
        <div>
            
            <Carusel></Carusel>
            <SideImgBanner></SideImgBanner>
            <Category></Category>
           <OnlyPic></OnlyPic>
        </div>
    );
};

export default Home;