import React from 'react';
import './populargood.css';
const PopularGood = ({popula}) => {
const{img,name,title,prices}=popula;
    return (
        <div>
           <div className="col">
            <div className="h-100">
                <img src={img} class="populargood card-img-top w-75" alt="..."/>
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

export default PopularGood;