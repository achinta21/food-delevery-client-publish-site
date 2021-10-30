import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const {user,logOut} = useAuth();
    return (
      <div className="header">
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
         <Link className="navbar-brand fw-bold ms-5 fs-4" to="/">Delicious Food</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
     </button>
        <div className="collapse navbar-collapse d-flex justify-content-end me-5" id="navbarTogglerDemo02">
      <ul className="navbar-nav mb-2 mb-lg-0 fs-5">
        <li className="nav-item">
          <Link className="header-link  fw-bold me-3" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="header-link  fw-bold me-3" to="/servies">Servies</Link>
        </li>
        <li className="nav-item">
          <Link className="header-link fw-bold me-3" to="/myorder">MyOrder</Link>
        </li>
        <li className="nav-item">
          <Link className="header-link  fw-bold me-3" to="/galary">Galary</Link>
        </li>
        <li className="nav-item">
          <Link className="header-link  fw-bold me-3" to="/contact">Contact</Link>
        </li>
        <li className="text-white fw-bold">{user?.displayName}</li> 
         <li className="nav-item">
          { user?.email?
          <button className="fw-bold text-white bg-dark rouded-3"  onClick={logOut}>logout</button> :
            <Link className="header-link  fw-bold me-3" to="/login">log in</Link>}
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;