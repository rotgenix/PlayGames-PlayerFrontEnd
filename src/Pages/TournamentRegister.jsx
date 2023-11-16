import axios from 'axios';
import React, { useState } from 'react'

import '../Styles/TournamentRegister.css'
import { useParams } from 'react-router-dom';

const TournamentRegister = () => {

  const { tournamentID } = useParams();
  console.log("id link ", tournamentID);


  const [teamName, setTeamName] = useState('');
  const [teamNumber, setTeamNumber] = useState('');
  const [teamEmail, setTeamEmail] = useState('');
  const [noOfPlayers, setNoOfPlayers] = useState('');


  const teamRegister = async (e) => {

    e.preventDefault();
    const data = await axios.post(`http://localhost:5000/tournamentregister/${tournamentID}`, {
      teamName,
      teamNumber,
      teamEmail,
      noOfPlayers,
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    }, {
      withCredentials: true,
    });
    console.log("res data", data);
    const teamRegisterData = data.data;
    console.log("Team regisr resp ", teamRegisterData);
  }

  return (
    <>

      <div className="touranment-register">
        <div className="tournament-register-container">

          <form onSubmit={teamRegister}>

            Team Name: <input type="text" name='teamName' required
              onChange={(e) => {
                setTeamName(e.target.value)
              }}
            />

            Team Manager Number: <input type="number" name='teamNumber' required
              onChange={(e) => {
                setTeamNumber(e.target.value)
              }}
            />

            Team Manager Email: <input type="email" name='teamEmail' required
              onChange={(e) => {
                setTeamEmail(e.target.value)
              }}
            />

            No. of Players: <input type="number" name='noOfPlayers' required
              onChange={(e) => {
                setNoOfPlayers(e.target.value)
              }}
            />

            <button type='submit'>Register</button>
          </form>

        </div>
      </div>

    </>
  )
}

export default TournamentRegister