import React, { useEffect, useState } from 'react'
import TournamentCard from '../Components/TournamentCard';

import '../Styles/TournamentsPage.css'
import axios from 'axios';

const Tournaments = () => {

    const [tournamentsData, setTournamentsData] = useState([]);

    useEffect(() => {

        const fetchTournaments = async () => {
            const { data } = await axios.get('http://localhost:5000/getAllTournaments');
            setTournamentsData(data.allTournaments);
            console.log("all t data ", data.allTournaments);
        }
        fetchTournaments();
    }, [])

    return (
        <>
            <div className="tournaments-page">
                <div className="tournaments-container">
                    <div className="tournaments-container-text">
                        <h3>Upcoming Tournaments</h3>
                    </div>
                    <div>
                        {
                            tournamentsData.map((value, index) => {
                                // console.log("asdfdsgd", value.imgaddress);
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
            </div>
        </>
    )
}

export default Tournaments