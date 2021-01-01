import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-sm navbar-light navbar-right">
                <Link to="/">
                    <img src="logos/headerImage.png" alt="logo" className="img-fluid" style={{ width: '150px' }} />
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Donaition</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/events">Events</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/blogs">Blogs</Link>
                        </li>
                    </ul>
                    <Link to="/dashboard"><button className="btn btn-primary mr-2">Admin</button></Link>
                    <Link to="/login"><button className="btn btn-dark">Login</button></Link> \<div pe=""></div> 
                </div>
            </nav>
            <form class="form-inline d-flex justify-content-center mt-5">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    )
}   