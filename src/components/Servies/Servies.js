import React, { useEffect, useState } from 'react';
import './Servies.css';
import servies from '../../images/delevery/servies.jpg';
import Servie from '../Servie/Servie';

const Servies = () => {
const [servies,setServies]=useState([]);
useEffect(()=>{
    fetch('Servies.JSON')
    .then(res=>res.json())
    .then(data=>setServies(data))
},[])
    return (
        <div>
           <div className="product-servies">
    
           </div>
           <div className="ms-5 me-5">
            <h1 className="fw-bold my-5">best food servies</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {servies.map(servie=><Servie id={servie.key} servie={servie}></Servie>)}
            </div>
           </div>
        </div>
    );
};

export default Servies;