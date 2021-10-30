import React from 'react';
import './Banner.css';
import banner from '../../images/delevery/delevery.png';
const Banner = () => {
    return (
        <div className="header-banner d-flex justify-content-center align-items-center w-100">
            <div className="w-50 mt-5">
            <h1 className="fw-bold mb-4 text-white">Express <span className="text-warning fw-bold">Home Delivery</span></h1>
            <p className="mb-4 text-white">Imperdiet varius lacus, id placerat purus vulputate non. <br /> Fusce in felis vel arcu maximus placerat eu ut arcu. <br /> Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
            <button className="banner-btn btn">Learn more</button>
            </div>
            <div className="w-50">
                <img className="w-100" src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;