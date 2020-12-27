import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { userContext } from '../../App'
import './Register.css'
export default function Register() {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/userRegister', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="img-dispay">
                <img src="logos/headerImage.png" alt="logo" className="img-fluid" style={{ width: '150px' }} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="reg-form">
                <h3>Register as a volunteer</h3>
                <label>Name:</label>
                {errors.name && <span className="error">This field is required</span>}
                <input name="name" defaultValue={loggedInUser.displayName} ref={register({ required: true })} />

                <label>Email:</label>
                {errors.email && <span className="error">This field is required</span>}
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} />

                <label>Date:</label>
                {errors.date && <span className="error">This field is required</span>}
                <input name="date" placeholder="12/20/2021" ref={register({ required: true })} />

                <input type="submit" className="btn btn-primary" />
            </form>
        </div>
    )
}