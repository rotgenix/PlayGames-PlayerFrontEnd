import React from 'react'

import '../Styles/RegisterPage.css'

import playerimg from '../assets/iamplayer.jpg'

import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div className="register-page">
                <div className="register-page-container">
                    <h3>WELCOME SOLDIER</h3>
                    <div className="player">
                        <img src={playerimg} alt="" />
                        <Link to={'/player'}><button>I am Player</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register