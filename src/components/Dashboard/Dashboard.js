import React from 'react';
import SideBar from './SideBar/SideBar';
const Dashboard = () => {
    return (
        <div className='row container-fuid'>
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10">
                <h1>Hi Admin!!</h1>
                <h2>Welcome to Dashboard.......</h2>
            </div>
        </div>
    );
};

export default Dashboard;