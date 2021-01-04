import React from 'react'
import { Link } from 'react-router-dom';
import './volunteerTitle.css'

export default function TitleInfo({ items }) {
    return (
        <div className="col-md-3">
            <Link to={`/register/${items._id}`}>
                <img className="img-fluid" src={`data:image/png;base64,${items.image.img}`} />
                <p className="text-center">{items.title}</p>
            </Link>
        </div>
    )
}