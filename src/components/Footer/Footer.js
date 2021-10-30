import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer d-flex justify-content-around align-items-center">
           <div>
            <h4>Contact Us</h4>
            <h5>Email: Gomotofood451@gmail.com</h5>
            <h5>Phone No: +15475687421</h5>
           </div>
           <div>
                <form action="">
                    <p>Name <input type="email" name="name" id="" /></p>
                    <p>Email <input type="email" name="email" id="" /></p>
                </form>
           </div>
        </div>
    );
};

export default Footer;