import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const OrganiserRegister = () => {

    const Navigate = useNavigate();

    const [organisationName, setOrganisationName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const callOrganiserRegister = async (e) => {
        e.preventDefault();
        console.log(organisationName, email, password)

        const { data } = await axios.post("http://localhost:5000/organiserRegister", {
            organisationName, email, password
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        });
        if (data.message === 'UserName already Taken Please choose another!') {
            alert(data.message);
            // Navigate('/');
        }
        else if (data.success) {
            alert(data.message);
            // Navigate('/login');
        }
        // console.log(registeredPlayer);
    }

    return (
        <>
            <div className="player-register">
                <div className="player-register-container">

                    <form onSubmit={callOrganiserRegister}>


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