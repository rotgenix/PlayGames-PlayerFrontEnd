import React, { useState } from 'react'
import axios from 'axios'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const callPlayerLogin = async (e) => {
        e.preventDefault();

        const LoggedInPlayer = await axios.post("http://localhost:5000/playerLogin", {
            email, password
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        })
        console.log(LoggedInPlayer);
    }

    return (
        <>
            <div className="player-register">
                <div className="player-register-container">

                    <form onSubmit={callPlayerLogin}>

                        Email: <input type="email" name='email' required

                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        Password: <input type="password" name='password' required
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />

                        <button type='submit'>Login</button>
                    </form>

                </div>

            </div>
        </>
    )
}

export default Login