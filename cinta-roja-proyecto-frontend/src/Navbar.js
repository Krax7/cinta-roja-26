import React, { Component } from 'react';
import profile_photo from './images/profile-photo.jpg';
import './navbar.css';

export class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="menu">
                    <div className="navbar-nav">
                        <div className="nav-item">
                            <a className="navbar-brand" href="#"><i className="fab fa-facebook"></i></a>
                        </div>
                        <div className="nav-item">
                            <form className="form-inline">
                                <input className="search" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                        <div className="nav-item margin-top">
                            <img id="profile-photo" src={profile_photo} alt="Responsive image"></img>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="#">Omar</a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="#">Create</a>
                        </div>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown"></div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}