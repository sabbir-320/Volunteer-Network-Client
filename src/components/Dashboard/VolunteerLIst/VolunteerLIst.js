import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import VolunteerLIstInfo from './VolunteerLIstInfo';

const VolunteerLIst = () => {
    const [loggedInUser, setLoggedInUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allUser')
            .then(res => res.json())
            .then(data => setLoggedInUser(data))
    }, [])
    return (
        <div >
            <div>
                <SideBar></SideBar>
            </div> 
            {
                loggedInUser.map(users => <VolunteerLIstInfo users={users}></VolunteerLIstInfo>)
            }
        </div>

    );
};

export default VolunteerLIst;