import React from 'react';
import Banner from '../Banner/Banner';
import BigDeals from '../BigDeals/BigDeals';
import OurServies from '../OurServies/OurServies';
import PopularGoods from '../PopularGoods/PopularGoods';


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <OurServies></OurServies>
        <BigDeals></BigDeals>
        <PopularGoods></PopularGoods>
        </div>
    );
};

export default Home;