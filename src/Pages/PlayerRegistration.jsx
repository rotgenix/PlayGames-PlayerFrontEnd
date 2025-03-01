import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


import { server } from '../App';
import { Context } from '../main';

import '../Styles/PlayerRegister.css'

import registerBackground from '../assets/register-background.jpg'
import Loader from '../Components/Loader';


const PlayerRegistration = () => {

    const [loader, setLoader] = useState(false);

    const Navigate = useNavigate();
    const {
        isPlayerLoggedIn,
        setIsPlayerLoggedIn,
    } = useContext(Context);


    if (isPlayerLoggedIn) {
        alert("Player is logged in register");
        Navigate('/');
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const callPlayerRegister = async (e) => {
        setLoader(true);

        e.preventDefault();
        const { data } = await axios.post(`${server}/playerRegister`, {
            name, email, password
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        });
        console.log("reg res data", data);
        if (data.success) {
            // alert(data.message);

            setIsPlayerLoggedIn(true);
            setLoader(false);

            Navigate('/');
        }
        else {
            alert(data.message);
            // setIsPlayerLoggedIn(false);
            // Navigate('/login');
        }
        setLoader(false);
    }

    return (
        <>
            <div className="player-register">
                {
                    loader ? <Loader /> : <div>
                        <div className="background-image">
                        </div>

                        <div className="player-register-container">
                            <h3>You might be the NEXT LEGEND</h3>
                            <div className="form-container">
                                <form onSubmit={callPlayerRegister}>

                                    <input type="text" name='name' required
                                        placeholder='Name'
                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }}
                                    />

                                    <input type="email" name='email' required
                                        placeholder='Email'
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                    />

                                    <input type="password" name='password' required
                                        placeholder='Password'
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                    />

                                    <button type='submit'>Register</button>
                                </form>
                            </div>
                            <div className='login-here'>
                                <p>Already registered?
                                    <Link to={'/login'}>Login here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default PlayerRegistration