import React, { useState } from 'react'
import axios from 'axios'

const OrganiserRegister = () => {





    const [username, setUsername] = useState('');
    const [organisationName, setOrganisationName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const callOrganiserRegister = async (e) => {
        e.preventDefault();
        console.log(username, organisationName, email, password)

        const registeredPlayer = await axios.post("http://localhost:5000/organiserRegister", {
            username, organisationName, email, password
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

                    <form onSubmit={callOrganiserRegister}>

                        Username: <input type="text" name='username' required
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />

                        Organisation Name: <input type="text" name='name' required
                            onChange={(e) => {
                                setOrganisationName(e.target.value);
                            }}
                        />

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

                        <button type='submit'>Register</button>
                    </form>

                </div>

            </div>
        </>
    )
}

export default OrganiserRegister