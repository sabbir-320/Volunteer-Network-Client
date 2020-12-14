import React from 'react'
import Header from './Header/Header'
import Title from './VolunteearTitle/Title'
export default function Home() {
    return(
        <div className="d-flex justify-content-center">
            <div className="w-75">
            <Header></Header>
            <Title></Title>
            </div>
        </div>
    )
}