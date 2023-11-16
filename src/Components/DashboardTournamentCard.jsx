import React from 'react'
import '../Styles/GameCard.css'

import '../Styles/DashboardTournamentCard.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const DashboardTournamentCard = ({ tournamentTime, tournamentName, tournamentDate, imgaddress, prizePool, organiserName, id }) => {

    const deleteTournament = async () => {
        const deletedTournament = await axios.get(`http://localhost:5000/tournaments/deletetournament/${id}`, {

        }, {
            headers: {
                "Content-Type": "application/json",
            }
        }, {
            withCredentials: true,
        })
        console.log(deletedTournament)
    }

    return (
        <>
            <div className="dashboard-tournament-card">
                <img src={imgaddress} alt="" />
                <h3>{tournamentName}</h3>
                <div className="dashboard-time">
                    <p>₹{prizePool}</p>
                    <p>{tournamentDate}</p>
                    <p>{tournamentTime}</p>
                </div>
                <div className="dashboard-oraganiser">
                    <h3>{organiserName}</h3>
                </div>
                <div className="dashboard-register-button">
                    <Link to={`/tournaments/teams/${id}`}>Teams</Link>
                    <button onClick={deleteTournament}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default DashboardTournamentCard