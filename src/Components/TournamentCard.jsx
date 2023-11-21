import React from 'react'
import '../Styles/GameCard.css'

import '../Styles/TournamentCard.css'
import { Link } from 'react-router-dom'


const TournamentCard = ({ gameName, prizePool, tournamentDate, tournamentName, tournamentTime, organiserName, tournamentID, imgAddress }) => {

    return (
        <>
            <div className="tournament-card">
                <img src={imgAddress} alt="" />
                <h3>{tournamentName}</h3>
                <div className="time">
                    <p>₹ {prizePool}</p>
                    <p>{tournamentDate}</p>
                    <p>{tournamentTime}</p>
                </div>
                <div className="oraganiser">
                    <h3>{organiserName}</h3>
                </div>
                <div className="register-button">
                    <Link to={`/tournamentregister/${tournamentID}`}><button>Register</button></Link>
                </div>
            </div>
        </>
    )
}

export default TournamentCard