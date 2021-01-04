import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RegisterInfo from './RegisterInfo'


export default function Register() {
    const { id } = useParams()
    const [userTask, setUserTask] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/register/${id}`)
            .then(res => res.json())
            .then(data => setUserTask(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className="container">
            <div className="w-100 vh-100">
                {
                    userTask.map(x => <RegisterInfo userItem={x}></RegisterInfo>)
                }
            </div>
        </div>
    )
}