import React from 'react'

import '../Styles/RegisterPage.css'

import playerimg from '../assets/iamplayer.jpg'
import organiserimg from '../assets/iamorganiser.jpg'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div className="register-page">
                <div className="register-page-container">
                    <div className="player">
                        <img src={playerimg} alt="" />
                        <Link to={'/player'}><button>I am Player</button></Link>
                    </div>
                    <div className="organiser">
                        <img src={organiserimg} alt="" />
                        <Link to={'/organiser'}><button>I am Organiser</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register