import React from 'react';
import './Servie.css';
const Servie = ({servie}) => {
    const{img,name,prices,title}=servie
    return (
  <div>
     <div className="ourservie col">
      <div className="h-80">
       <img src={img} className="card-img-top w-100"    alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{title}</p>
        <h4 className="fw-bold">${prices}</h4>
        <button className="banner-btn btn">Buy now</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Servie;