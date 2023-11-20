import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios'
import '../Styles/Home.css'

//Supported Games
import bgmiSupported from '../assets/SupportedGames/bgmi.jpg'
import codmSupported from '../assets/SupportedGames/codm.jpg'
import csgo2Supported from '../assets/SupportedGames/csgo2.jpg'
import dota2Supported from '../assets/SupportedGames/dota2.jpg'
import lolSupported from '../assets/SupportedGames/lol.jpeg'
import valorantSupported from '../assets/SupportedGames/valorant.jpg'

import GameCard from '../Components/GameCard'
import TournamentCard from '../Components/TournamentCard'
import { Link } from 'react-router-dom'
// import { Context } from '../main'










import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";


import { server } from '../App'
import Loader from '../Components/Loader'

const Home = () => {

    const [loader, setLoader] = useState(false);

    const [tournamentsData, setTournamentsData] = useState([]);

    useEffect(() => {

        const fetchTournaments = async () => {
            const { data } = await axios.get(`${server}/getAllTournaments`);
            setTournamentsData(data.allTournaments);
        }
        fetchTournaments();

    }, []);


    return (
        <>
            {
                loader ? <Loader /> : <>
                    <section className='home-section'>
                        <div className="home-section-container">

                            <div className="background-image-container"></div>

                            <div className="background-text-container">
                                <h1>
                                    <span className='fight'>Fight</span>
                                    <span className='compete'>Compete</span>
                                    <span className='conquer'>Conquer</span>
                                </h1>
                            </div>

                        </div>
                    </section >

                    <section className="follow-section">
                        <div className="follow-section-container">
                            <Link className='about-link'>ABOUT</Link>
                            <div className="socials-container">
                                <ul>
                                    <li style={{
                                        animationDelay: '0.2s',
                                    }}><Link><AiFillInstagram /></Link></li>
                                    <li style={{
                                        animationDelay: '0.4s',
                                    }}><Link><FaYoutube /></Link></li>
                                    <li style={{
                                        animationDelay: '0.6s',
                                    }}><Link><FaFacebook /></Link></li>

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
                        <div className="featured-tournaments-container">
                            <div className='featured-text'>
                                <h1>UPCOMING & FEATURED TOURNAMENTS</h1>
                                <p>TAKE YOUR COMPETING SKILLS TO NEXT LEVEL</p>
                            </div>
                            <div className="featured-card-container">
                                {
                                    tournamentsData.map((value, index) => {
                                        const imgName = `${value.gameName}`;
                                        if (index < 3) {
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
                                        }

                                    })
                                }
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default Home