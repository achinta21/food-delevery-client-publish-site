import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Logins.css';
const Logins = () => {
    const{signInUsingGoogle}=useAuth();
    return (
        <div className="login">
            <div className="contact">
            <h1 className="text-white fw-bold my-4">Please Login</h1>
            <form onSubmit>
            <div className="m-auto">
                <input type="text" placeholder="Email"/>
                <input type="Password" placeholder="Password"/>
                <br />
                <input className="submit fw-bold" type="submit" value="Submit" /> 
            </div>
            </form>
            <Link to="/home"><button className="fw-bold bg-warning py-2 px-3 rounded-3">Back to Home</button></Link>
            <button onClick={signInUsingGoogle} className="fw-bold bg-warning py-2 px-3 rounded-3">Google Login</button>
            </div>
        </div>
    );
};

export default Logins;