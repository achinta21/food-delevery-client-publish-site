import React, { useEffect, useState } from 'react';
import OurServie from './OurServie/OurServie';

const OurServies = () => {
    const[servies,setServies]=useState([]);
    useEffect(()=>{
        fetch('https://ghoulish-catacombs-80187.herokuapp.com/delivery')
        .then(res=>res.json())
        .then(data=>setServies(data))
    },[])
    return (
        <div>
            <h1 className="my-5">welcome to Our Servies</h1>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-4 g-4 ms-5 me-5">

            {
                servies.map(servie=><OurServie id={servie.key} servie={servie}></OurServie>)
            }
            </div>
        </div>
    );
};

export default OurServies;