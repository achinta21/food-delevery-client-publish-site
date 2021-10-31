import React from 'react';
import './AddServices.css';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddServices = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
      console.log(data);
      axios.post('http://localhost:5000/delivery',data)
      .then(res=>{
          if(res.data.insertedId){
              alert('added successfully')
              reset();
          }
      })
    };
    return (
        <div className="add-services">
            <h1 className="fw-bold mb-4 mt-5">Add servies</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
             <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
             <input type="number" {...register("prices")}placeholder="prices"/>
             <input {...register("img")}placeholder="images uri"/>
             <textarea {...register("title")}placeholder="title"/>
              <input className="bg-warning fw-bold" type="submit" value="Submit"/>
         </form>
        </div>
    );
};

export default AddServices;