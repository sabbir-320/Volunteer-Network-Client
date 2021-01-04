import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../App';
import Header from '../Home/Header/Header';
import EventInfo from './EventInfo';

export default function Event() {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [event, setEvent] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/volunteerByEmail?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(events => {
                setEvent(events)
            })
    }, [])
    return (
        <div className="container">
            <Header></Header>
            <div className="row">
                {
                    event.map(evt => <EventInfo events={evt}></EventInfo>)
                }
            </div>
        </div>
    )
}