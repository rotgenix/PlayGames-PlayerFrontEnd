import React, { useContext, useEffect, useState } from 'react'
import TournamentCard from '../Components/TournamentCard';

import '../Styles/TournamentsPage.css'
import axios from 'axios';
import { server } from '../App';
import { useNavigate } from 'react-router-dom';
import { Context } from '../main';
import Loader from '../Components/Loader';

const Tournaments = () => {

    const {
        isPlayerLoggedIn,
        setIsPlayerLoggedIn,
    } = useContext(Context);

    const [loader, setLoader] = useState(true);

    const Navigate = useNavigate();
    const [tournamentsData, setTournamentsData] = useState([]);

    useEffect(() => {

        if (!isPlayerLoggedIn) {
            alert("Please Login First to access tournaments");
            Navigate('/login');
        }

        const fetchTournaments = async () => {
            const data2 = await axios.get(`${server}/getAllTournaments`);
            const { data } = data2;
            // console.log("data2", data2);
            setTournamentsData(data.allTournaments);
            setLoader(false);
            // console.log("all t data ", data.allTournaments);
        }
        fetchTournaments();
    }, [])

    return (
        <>
            <div className="tournaments-page">
                {
                    loader ? <Loader /> : <div className="tournaments-container">
                        <div className="tournaments-container-text">
                            <h3>Upcoming Tournaments</h3>
                        </div>
                        <div className='tournaments-card-container'>
                            {
                                tournamentsData.map((value, index) => {

                                    return (
                                        <TournamentCard
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
                }
            </div>
        </>
    )
}

export default Tournaments