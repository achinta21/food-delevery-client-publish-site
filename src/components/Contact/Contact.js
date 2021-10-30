import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <div className="contact-item">
                
            </div>
            <div className="contact">
            <h1 className="text-white fw-bold my-4">Send Message Contact</h1>
            <div className="m-auto">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <br />
                <textarea name="" id="" cols="35" rows="8" placeholder="message"></textarea>
                <br />
                <input className="bg-warning fw-bold" type="submit" value="Submit" />
            </div>
            </div>
        </div>
    );
};

export default Contact;