import React, { useEffect, useState } from 'react';
import './populars.css';
import PopularGood from '../PopularGood/PopularGood';

const PopularGoods = () => {
const[popular,setPopular]=useState([]);
useEffect(()=>{
    fetch('PopularGoods.JSON')
    .then(res=>res.json())
    .then(data=>setPopular(data))
},[])
    return (
        <div className="populars">
            <h1 className="my-5">Best Popular Goods</h1>
            <div class="row row-cols-1 row-cols-md-1 row-cols-lg-4 g-4">
                {popular.map(popula=><PopularGood id={popula.key} popula={popula}></PopularGood>)}
            </div>
        </div>
    );
};

export default PopularGoods;