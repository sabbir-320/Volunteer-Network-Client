import React from 'react'
export default function EventInfo({ events }) {
    console.log(events);
    return (
        <div className="row">
            <div className="col-md-6">
                <img className="img-fluid" style={{ width: '200px' }} src="https://ymcacolumbus.org/sites/default/files/styles/media_full/public/2019-07/volunteer2.png?itok=Uk3juGz0" alt="volunteer" />
                <div className="">
                    <h4> {events.displayName} </h4>
                    <p> {events.date} </p>
                    <button className="btn btn-secondary">Cancel</button>
                </div>
            </div>
        </div>
    )
}