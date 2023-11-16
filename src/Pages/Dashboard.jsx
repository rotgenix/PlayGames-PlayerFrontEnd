import React, { useEffect, useState } from 'react'
import DashboardTournamentCard from '../Components/DashboardTournamentCard'

import '../Styles/Dashboard.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {

    const [myTournaments, setMyTournaments] = useState([]);

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchMyTournaments = async () => {
            const { data } = await axios.get(`http://localhost:5000/tournaments/mytournaments/${id}`, {}, {
                headers: {
                    "Content-Type": "application/json",
                }
            }, {
                withCredentials: true,
            });
            console.log(data);
            console.log(data.tournaments);
            setMyTournaments(data.tournaments);
        }
        fetchMyTournaments();
    }, []);


    return (
        <>
            <div className="dashboard">
                <div className="dashboard-container">
                    <div className="post">
                        <div className="create-button">
                            <Link to={'/createtournament'}><button>Post a Tournament</button></Link>
                        </div>
                    </div>
                    <div className="live-tournaments">
                        <h3>Live Tournaments</h3>
                        <div className="live-container">
                            {
                                myTournaments.map((value, index) => {

                                    console.log(value)
                                    console.log(value._id)
                                    console.log(value.tournamentTime)
                                    console.log(value.tournamentName)
                                    console.log(value.tournamentDate)
                                    console.log(value.imgaddress)
                                    console.log(value.prizePool)
                                    console.log(value.organiserName)

                                    return (< DashboardTournamentCard
                                        tournamentTime={value.tournamentTime}
                                        tournamentName={value.tournamentName}
                                        tournamentDate={value.tournamentDate}
                                        imgaddress={value.imgaddress}
                                        prizePool={value.prizePool}
                                        organiserName={value.organiserName}
                                        key={value._id}
                                        id={value._id}
                                    />)
                                })
                            }

                        </div>
                    </div>
                    <div className="upcoming-tournaments">
                        <h3>Upcoming Tournaments</h3>
                        <div className="upcoming-container">
                            {/* <Link to={'/checkteams'}></Link>
                            <Link to={'/checkteams'}><DashboardTournamentCard /></Link>
                            <Link to={'/checkteams'}><DashboardTournamentCard /></Link>
                            <Link to={'/checkteams'}><DashboardTournamentCard /></Link>
                            <Link to={'/checkteams'}><DashboardTournamentCard /></Link>
                            <Link to={'/checkteams'}><DashboardTournamentCard /></Link>
                            <Link to={'/checkteams'}><DashboardTournamentCard /></Link>
                            <Link to={'/checkteams'}><DashboardTournamentCard /></Link> */}
                        </div>
                    </div>
                    <div className="past-tournaments">
                        <h3>Past Tournaments</h3>
                        <div className="past-container">
                            {/* <Link to={'/checkteams'}><DashboardTournamentCard /></Link>
                            <Link to={'/checkteams'}><DashboardTournamentCard /></Link>
                            <Link to={'/checkteams'}><DashboardTournamentCard /></Link>
                            <Link to={'/checkteams'}><DashboardTournamentCard /></Link>
                            <Link to={'/checkteams'}><DashboardTournamentCard /></Link>
                            <Link to={'/checkteams'}><DashboardTournamentCard /></Link>
                            <Link to={'/checkteams'}><DashboardTournamentCard /></Link>
                            <Link to={'/checkteams'}><DashboardTournamentCard /></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard