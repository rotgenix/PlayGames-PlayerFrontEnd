import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../main';
import { server } from '../App';

import '../Styles/Login.css'
import playerimg from '../assets/iamplayer.jpg'
import Loader from '../Components/Loader';

const Login = () => {

    const [loader, setLoader] = useState(false);

    const Navigate = useNavigate();

    const {
        isPlayerLoggedIn,
        setIsPlayerLoggedIn,
    } = useContext(Context);

    useEffect(() => {
        if (isPlayerLoggedIn) {
            alert("player logged in")

            Navigate('/');
        }
    })

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const callPlayerLogin = async (e) => {
        e.preventDefault();
        setLoader(true);
        const { data } = await axios.post(`${server}/playerLogin`, {
            email, password
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        })
        console.log("logged in response", data);
        if (data.success) {
            // alert(data.message);
            setLoader(false);
            setIsPlayerLoggedIn(true);
            Navigate('/');
        }
        else {
            alert(data.message);
            setIsPlayerLoggedIn(false);
            Navigate('/join');
        }
    }

    return (
        <>
            <div className="player-login">
                {
                    loader ? <Loader /> : <div className="player-login-container">
                        <div className="img-form">
                            <div className="player-login-image">
                                <img src={playerimg} alt="" />
                            </div>
                            <form onSubmit={callPlayerLogin}>

                                <input type="email" name='email' required
                                    placeholder='Email'
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                                <input type="password" name='password' required
                                    placeholder='Password'
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />

                                <button type='submit'>Login</button>
                            </form>
                        </div>
                        <div className='register-here'>
                            <p>Not Registered?
                                <Link to={'/join'}>Register here</Link>
                            </p>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default Login