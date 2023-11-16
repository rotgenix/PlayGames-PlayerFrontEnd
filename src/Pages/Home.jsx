import React, { useEffect, useState } from 'react'

import axios from 'axios'
import '../Styles/Home.css'

//Supported Games
import bgmiSupported from '../assets/SupportedGames/bgmi.jpg'
import codmSupported from '../assets/SupportedGames/codm.jpg'
import csgo2Supported from '../assets/SupportedGames/csgo2.jpg'
import dota2Supported from '../assets/SupportedGames/dota2.jpg'
import lolSupported from '../assets/SupportedGames/lol.jpeg'
import valorantSupported from '../assets/SupportedGames/valorant.jpg'

//TournamentGames
import bgmi from '../assets/TournamentGames/bgmiTournament.jpg'
import codm from '../assets/TournamentGames/codmTournament.jpg'
import csgo from '../assets/TournamentGames/csgoTournament.jpg'
import dota2 from '../assets/TournamentGames/dota2Tournament.jpg'
import leagueOfLegends from '../assets/TournamentGames/lolTournament.jpg'
import valorant from '../assets/TournamentGames/valorantTournament.jpg'


import GameCard from '../Components/GameCard'
import TournamentCard from '../Components/TournamentCard'
import { Link } from 'react-router-dom'

const Home = () => {
    const [tournamentsData, setTournamentsData] = useState([]);

    useEffect(() => {

        const fetchTournaments = async () => {
            const { data } = await axios.get('http://localhost:5000/getAllTournaments');
            setTournamentsData(data.allTournaments);
            console.log("all t data ", data.allTournaments);
        }
        fetchTournaments();
    }, []);


    return (
        <>
            <section className='home-section'>
                <div className="hero-section">

                    <div className="background-image-container"></div>

                    <div className="background-text-container">

                        <h1>Fight Compete Conquer </h1>
                    </div>

                </div>
            </section>

            <section className="follow">
                <div className="about-paai">
                    <button>ABOUT PAAI ESPORTS</button>
                    <div className="socials-container">
                        <ul>
                            <li><Link>Twitter</Link></li>
                            <li><Link>Twitter</Link></li>
                            <li><Link>Twitter</Link></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="supported-games">
                <div className="games">
                    <div className='games-text'>
                        <h1>REGISTER & PLAY</h1>
                        <p>TAKE YOUR COMPETING SKILLS TO NEXT LEVEL</p>
                    </div>
                    <div className="supported-card-container">
                        <GameCard img={bgmiSupported} text="BGMI" />
                        <GameCard img={codmSupported} text="Call of Duty Mobile" />
                        <GameCard img={csgo2Supported} text="CSGO2" />
                        <GameCard img={dota2Supported} text="Dota 2" />
                        <GameCard img={lolSupported} text="League of Legends" />
                        <GameCard img={valorantSupported} text="Valorant" />
                    </div>
                </div>
            </section>

            <section className="featured-tournaments">
                <div className="featured">
                    <div className='featured-text'>
                        <h1>UPCOMING & FEATURED TOURNAMENTS</h1>
                        <p>TAKE YOUR COMPETING SKILLS TO NEXT LEVEL</p>
                    </div>
                    <div className="featured-card-container">
                        {

                            tournamentsData.map((value, index) => {
                                // console.log(value.gameName)
                                const imgName = `${value.gameName}`;
                                // console.log("img", imgName)
                                return (
                                    <TournamentCard
                                        tournamentImageName={imgName}
                                        tournamentID={value._id}
                                        gameName={value.gameName}
                                        prizePool={value.prizePool}
                                        tournamentDate={value.tournamentDate}
                                        tournamentName={value.tournamentName}
                                        tournamentTime={value.tournamentTime}
                                        organiserName={value.organiserName}
                                        key={index}
                                        imgAddress={value.imgaddress}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home