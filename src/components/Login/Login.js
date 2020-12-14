import React, { useContext } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);

export default function Login() {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // var token = result.credential.accessToken;
                // The signed-in user info.
                // var user = result.user;
                setLoggedInUser(result.user)
                history.replace(from)
                // ...
            })
        // .catch(error => {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // The email of the user's account used.
        //     var email = error.email;
        //     // The firebase.auth.AuthCredential type that was used.
        //     var credential = error.credential;
        //     // ...
        // });
    }
    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <img src="logos/headerImage.png" alt="logo" className="img-fluid" style={{ width: '150px' }} />
            </div>
            <div className="d-flex justify-content-center mt-5">
                <h4>Login with</h4>
            </div>
            <div className="d-flex justify-content-center mt-3">
                    <button onClick={handleSignIn}>Continue with google</button>
            </div>
        </div>
    )
}