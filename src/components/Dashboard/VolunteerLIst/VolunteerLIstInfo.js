import React from 'react';
import SideBar from '../SideBar/SideBar';

const VolunteerLIstInfo = ({ users }) => {
    return (
        <div className="row container d-flex justify-content-center ml-5">
                {/* <div className="col-md-2">
                    <SideBar></SideBar>
                </div> */}
                <div className="col-md-2">
                    <ul>
                        <li>{users.name}</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li>{users.email}</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li>{users.date}</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li>{users.date}</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li>{users.date}</li>
                    </ul>
                </div>
        </div>
    );
};

export default VolunteerLIstInfo;