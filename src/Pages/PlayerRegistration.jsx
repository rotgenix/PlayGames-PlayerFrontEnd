import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerRegistration = () => {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const callPlayerRegister = async (e) => {
        e.preventDefault();

        const registeredPlayer = await axios.post("http://localhost:5000/playerRegister", {
            username, name, email, password
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        })
        console.log(registeredPlayer);
    }


    return (
        <>
            <div className="player-register">
                <div className="player-register-container">

                    <form onSubmit={callPlayerRegister}>

                        Username: <input type="text" name='username' required
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />

                        Name: <input type="text" name='name' required
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />

                        Email: <input type="email" name='email' required
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />

                        Password: <input type="password" name='password' required
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />

                        <button type='submit'>Register</button>
                    </form>

                </div>

            </div>
        </>
    )
}

export default PlayerRegistration