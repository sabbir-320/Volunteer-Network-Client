import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Register.css';

const RegisterInfo = ({userItem}) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        fetch('http://localhost:5000/userRegister', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("your register is done successfully")
            }
        })
    }
    return (
        <div className="">
            <div className="">
                <Link to='/'>
                    <img src="logos/headerImage.png" alt="logo" className="img-fluid" style={{ width: '150px' }} />
                </Link>
            </div>
            <h3>You register is for </h3>
            {/* <img className="img-fluid" src={`data:image/png;base64,${userItem.image.img}`} /> */}
            {/* <p className="text-center">{userItem.title}</p> */}
            <form onSubmit={handleSubmit(onSubmit)} className="reg-form">
                <h3>Register as a volunteer</h3>
                <label>Name:</label>
                {errors.name && <span className="error">This field is required</span>}
                <input name="name" defaultValue={loggedInUser.displayName} ref={register({ required: true })} />

                <label>Phone nember</label>
                {errors.nember && <span className="error">This field is required</span>}
                <input name="nember" placeholder="01710-195666" ref={register({ required: true })} />

                <label>Email:</label>
                {errors.email && <span className="error">This field is required</span>}
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} />

                <label>Date:</label>
                {errors.date && <span className="error">This field is required</span>}
                <input name="date" placeholder="12/20/2021" ref={register({ required: true })} />

                {/* <label>You want to volunteer in</label>
                {errors.title && <span className="error">This field is required</span>}
                <input name="title" defaultValue={userItem.title} ref={register({ required: true })} /> */}

                <input type="submit" className="btn btn-primary" />
            </form> 
        </div>
    );
};

export default RegisterInfo;