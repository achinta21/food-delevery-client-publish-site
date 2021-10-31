import React, { useEffect, useState } from 'react';
import Galarys from '../Galarys/Galarys';

const Galary = () => {
    const [photos,setPhotos]=useState([]);
    useEffect(()=>{
        fetch('Galary.JSON')
        .then(res=>res.json())
        .then(data=>setPhotos(data))
    },[])
    return (
        <div>
            <div className="product-servies">
           
            </div>
            <div>
            <h1 className="fw-bold my-5">Best <span className="text-warning">food Galary</span></h1>
            </div>
            <div class="row row-cols-1 row-cols-md-1 row-cols-lg-3  g-4 mx-5">
                {photos.map(photo=><Galarys id={photo.key} photo={photo}></Galarys>)}
            </div>
        </div>
    );
};

export default Galary;