import React from 'react';
import './BigDeals.css';
import big from '../../images/delevery/big.png'

const BigDeals = () => {
    return (
        <div className="bigdeals">
            <h2 className="fw-bold my-5">This Week Big Deals</h2>
            <div className="cols-2 cols-md-2 d-flex justify-content-center align-items-center me-5 ms-5">
            <div className="w-50">
            <img src={big} alt="" />
            </div>
            <div className="w-50 mt-5">
                <h2 className="my-4 fw-bold">Big Deals of the Week</h2>
                <p className="mb-4">7 Easy Rider areas are available for giving snowsports <br />complete peace of mind: zones closed to other skiers.</p>
                <button className="banner-btn btn">show now</button>
            </div>
            </div>
        </div>
    );
};

export default BigDeals;