import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="/assets/images/logo.png" className="logo" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Tentang</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Kompetisi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Informasi Terbaru</a>
                        </li>  
                        <li className="nav-item">
                            <a className="nav-link" href="/">Linimasa</a>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link masuk" to="/login">Masuk</Link>
                        </li>          
                    </ul>
                </div>
                </div>        
            </nav>
        </>
    )
}

export default Navbar
