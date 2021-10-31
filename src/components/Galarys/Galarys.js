import React from 'react';
import './Galarys.css';

const Galarys = ({photo}) => {
    const{img}=photo;
    return (
        <div className="galary-item col g-4">
            <div class=" h-100">
                <img src={img} className="card-img-top" alt="..."/>
      
            </div>
        </div>
    );
};

export default Galarys;