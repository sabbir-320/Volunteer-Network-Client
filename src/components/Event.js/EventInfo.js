import React, { useEffect, useState } from 'react'
export default function EventInfo({ events }) {
    console.log(events);
    const [registerdItem, setRegisterdItem] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/registerdItem/${events.id}`)
            .then(res => res.json())
            .then(data => setRegisterdItem(data))
            .catch(err => console.log(err))
    }, [])
    console.log(registerdItem);
    return (
        <div className="col-md-6">
            <div className="row">
                <div className="col-sm-6">
                    {
                        {/* <img className="img-fluid" src={`data:image/png;base64,${items.image.img}`} /> */ }
                    }
                </div>
                <div className="col-sm-6">
                    <p>{events.title}</p>
                    <p> {events.date} </p>
                    <button className="btn btn-secondary">Cancel</button>
                </div>
            </div>
        </div>
    )
}