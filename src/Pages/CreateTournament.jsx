import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { server } from '../App';

const CreateTournament = () => {

    const Navigate = useNavigate();

    const [tournamentName, setTournamentName] = useState('');
    const [prizePool, setPrizePool] = useState(0);
    const [tournamentDate, setTournamentDate] = useState(new Date());
    const [tournamentTime, setTournamentTime] = useState('');
    const [gameName, setGameName] = useState('');


    const postTournamentHandler = async (e) => {
        e.preventDefault();

        console.log('sending ', tournamentName, prizePool, tournamentDate, tournamentTime, gameName);

        const { data } = await axios.post(`${server}/createTournament`, {
            tournamentName,
            prizePool,
            tournamentDate,
            tournamentTime,
            gameName

        }, {
            headers: {
                "Content-Type": "application/json",
            }
        }, {
            withCredentials: true,
        });
        console.log("create tournament: ", data);
        console.log("create tournament: ", data.message);
        console.log("create tournament: ", data.success);


        if (data.success) {
            alert(data.message);
            // Navigate('/tournaments');
        }
        else {
            alert(data.message);
        }
    }


    return (
        <>
            <div className="create-tournament">
                <div className="create-tournament-container">
                    <div className="form-container">
                        <form onSubmit={postTournamentHandler}>
                            Tournament Name: <input type="text" name='tournamentName'
                                onChange={(e) => {
                                    setTournamentName(e.target.value)
                                }}
                                required
                            />

                            Prize Pool (in ₹): <input type="number" name='prizePool'
                                onChange={(e) => {
                                    setPrizePool(e.target.value)
                                }}
                                required
                            />

                            Tournament Date: <input type="date" name='tournamentDate'
                                onChange={(e) => {
                                    setTournamentDate(e.target.value)
                                    console.log(tournamentDate)
                                }}
                                required
                            />

                            Tournament Timing: <input type="time" name='tournamentTime'

                                onChange={(e) => {
                                    setTournamentTime(e.target.value)
                                }}
                                required
                            />

                            Select game:
                            <select name="gameName" id="gameName"

                                onChange={(e) => {
                                    // console.log(e.target.value);
                                    setGameName(e.target.value);
                                    // console.log("on change", gameName)
                                }}

                                required
                            >
                                <option value="">Select Game</option>
                                <option value="bgmi">BGMI</option>
                                <option value="codm">CODM</option>
                                <option value="csgo2">CSGO2</option>
                                <option value="dota2">Dota 2</option>
                                <option value="leagueOfLegends">League of Legends</option>
                                <option value="valorant">Valorant</option>
                            </select>

                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTournament