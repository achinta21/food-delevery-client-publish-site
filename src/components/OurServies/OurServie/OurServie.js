import React from 'react';
import { Link } from 'react-router-dom';
import './OurServie.css';
const OurServie = ({servie}) => {
    const {id,img,name,title,prices}=servie;
    return (
        <div>
    <div className="ourservie col">
        <div className="h-100">
         <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5>{title}</h5>
        <p className="card-text">{name}</p>
        <h4 className="fw-bold">${prices}</h4>
        <Link to={`/myorder/${id}`}>
        <button className="banners-btn btn">buy now</button>
        </Link>
      </div>
    </div>
  </div>
        </div>
    );
};

export default OurServie;