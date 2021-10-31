import React, { useEffect, useState } from 'react';

const ManageServies = () => {
    const[services,setServices]=useState();
    useEffect(()=>{
        fetch('http://localhost:5000/delivery')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    const handelDelete=id=>{
        const url=`http://localhost:5000/delivery/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('successFully Deleted')
                const remaining=services.filter(service=>service._id!==id);
                setServices(remaining)

            }
        })
        
    }
    return (
        <div>
            <h1 className="my-5 fw-bold">manage servies</h1>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-4 g-5 ms-5 me-5">
            {
            services?.map(service=><div key={service._id}>
                <img className="w-75" src={service.img} alt="" />
                <h5>{service.title}</h5>
                <p>{service.name}</p>
                <h5>${service.prices}</h5>
             <button className="banners-btn btn" onClick={()=>handelDelete(service._id)}>Delete</button>
            </div>)
            }
            </div>
        </div>
    );
};

export default ManageServies;