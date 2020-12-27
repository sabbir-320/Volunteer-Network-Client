import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <Link to="/">
                <img src="logos/headerImage.png" alt="logo" className="img-fluid" style={{ width: '150px' }} />
            </Link>
            <ul className="list-unstyled">
                <li>
                    <Link to="/volunteerList" className="" >
                        <span>Volunteer register list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addEvent" className="" >
                        <span>Add event</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;