import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CheckTeams = () => {

    const [tournamentsTeam, setTournamentsTeam] = useState([]);
    const { tournamentID } = useParams();
    console.log(tournamentID);

    useEffect(() => {

        const fetchTeams = async () => {
            const { data } = await axios.get(`http://localhost:5000/tournaments/teams/${tournamentID}`, {
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }, {
                withCredentials: true,
            })
            // console.log(data)
            console.log(data.tournamentsTeam)
            console.log(
            )
            setTournamentsTeam(data.tournamentsTeam[0].participatingTeams);
        }

        fetchTeams();
    }, [])


    return (
        <>

            <div className="check-teams">
                <div className="check-teams-container">
                    <div className="teams">
                        {
                            tournamentsTeam.map((value, index) => {
                                console.log(value)
                                return (
                                    <div className="team-info">
                                        <span>{index + 1}</span>

                                        <span>{value.teamName}</span>
                                        <span>{value.noOfPlayers}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default CheckTeams