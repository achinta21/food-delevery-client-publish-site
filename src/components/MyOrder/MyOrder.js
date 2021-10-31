import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AddServices from '../AddServices/AddServices';
import OurServies from '../OurServies/OurServies';

const MyOrder = () => {
    const {servieId}=useParams();
    const [service,setService]=useState();
    useEffect(()=>{
        fetch(`https://ghoulish-catacombs-80187.herokuapp.com/delivery/${servieId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className="ourservie d-flex justify-content-center">
            <div className="ourservie w-50 ms-5 me-5 pb-2">
            <img className="w-50 rounded-3 mt-3 mb-5" src={service?.img} alt="" />
            <h5>{service?.title}</h5>
            <p>{service?.name}</p>
            <p>my order: {service?._id}</p>
            <h5 className="fw-bold">prices: ${service?.prices}</h5>
            </div>
            <div className="w-50">
                <AddServices></AddServices>
            </div>
        </div>
    );
};

export default MyOrder;