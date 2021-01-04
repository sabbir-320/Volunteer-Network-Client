import React, { useEffect, useState } from 'react'
import TitleInfo from './TitleInfo'

export default function Title() {
    const [volunteerItems, setVolunteerItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/volunteerItems')
            .then(res => res.json())
            .then(data => setVolunteerItems(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container">
            <div className="row">
                {volunteerItems.map(item => <TitleInfo items={item}></TitleInfo>)}
            </div>
        </div>
    )
}