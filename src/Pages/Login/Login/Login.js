import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, } from "firebase/auth";
import { useState } from "react";
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';


const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogIn, setIsLogIn] = useState(false);

    const auth = getAuth();

    // for email auth
    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleReg = e => {
        e.preventDefault();

        console.log(email, password);

        // for password validation
        if (password.length < 6) {
            setError('password must be at least 6 characters long.');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('password must contain 2 uppercase.');
            return;
        }

        isLogIn ? processLogIn(email, password) : registerNewuser(email, password);

    }

    const processLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    const registerNewuser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // for set user name in firebase
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {

            })
    }

    // for email verification
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    // for reset pass
    const handleClickResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }


    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePassChange = e => {
        setPassword(e.target.value)
    }

    const toggleLogIn = e => {
        setIsLogIn(e.target.checked);
    }


    const { signInUsingGoogle, handleGithubSignIn } = useAuth();


    return (

        <div className="container contact">
            <div className="row">
                <div className="col-md-3 mb-4 login-img">
                    <div className="contact-info">
                        <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="" />
                        <h2>Contact Us</h2>
                        <h4>We would love to hear from you !</h4>
                    </div>
                </div>
                <div className="col-md-9">

                    <form onSubmit={handleReg}>
                        <h3 className="text-primary mb-4">Please {isLogIn ? 'Login' : 'Register'}</h3>

                        {!isLogIn && <div className="row mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" onBlur={handleNameChange} className="form-control" placeholder="Your Name" id="inputName" />
                            </div>
                        </div>}


                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input onBlur={handlePassChange} type="password" className="form-control" id="inputPassword3" required />
                                <div className="text-danger">{error}</div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input onChange={toggleLogIn} className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Already Registered?
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-outline-secondary custom-btn">{isLogIn ? 'Login' : 'Register'}</button>

                        <button onClick={handleClickResetPassword} type="button" className="btn btn-link btn-sm ms-4">Reset password</button>
                    </form>
                    <hr />

                    <div className="row mt-4">
                        <div className="col-sm-12 col-md-6">
                            <button onClick={signInUsingGoogle} className="btn btn-outline-secondary btn-lg" type="submit" ><i className="fab fa-google me-3"></i>Sign in with Google</button>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <button onClick={handleGithubSignIn} className="btn btn-outline-secondary btn-lg" type="submit" ><i className="fab fa-github me-3"></i>Sign in with Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Login;