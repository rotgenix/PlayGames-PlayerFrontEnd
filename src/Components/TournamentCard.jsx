import React from 'react'
import '../Styles/GameCard.css'

import '../Styles/TournamentCard.css'
import { Link } from 'react-router-dom'

const bgmi = 'https://wallpapers.com/images/high/bgmi-cyberpunk-street-cxapqv3ux77orya3.webp'
const codm = 'https://wallpaperaccess.com/full/1470805.jpg'
const csgo = 'https://e1.pxfuel.com/desktop-wallpaper/536/381/desktop-wallpaper-counter-csgo-pc.jpg'
const dota2 = 'https://e1.pxfuel.com/desktop-wallpaper/177/315/desktop-wallpaper-dota2-abaddon-dota-2-official.jpg'
const leagueOfLegends = 'https://e0.pxfuel.com/wallpapers/973/943/desktop-wallpaper-league-of-legends-all-warriors-video-game.jpg'
const valorant = 'https://e0.pxfuel.com/wallpapers/182/605/desktop-wallpaper-chamber-valorant.jpg'


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