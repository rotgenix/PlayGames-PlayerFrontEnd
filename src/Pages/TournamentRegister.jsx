import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'

import '../Styles/TournamentRegister.css'
import { useNavigate, useParams } from 'react-router-dom';
import { server } from '../App';
import { Context } from '../main';
import Loader from '../Components/Loader';

const TournamentRegister = () => {
  const [loader, setLoader] = useState(false);

  const Navigate = useNavigate();

  const {
    isPlayerLoggedIn,
    setIsPlayerLoggedIn,
    playerID, setPlayerID
  } = useContext(Context);

  const { tournamentID } = useParams();

  const [teamName, setTeamName] = useState('');
  const [teamNumber, setTeamNumber] = useState('');
  const [teamEmail, setTeamEmail] = useState('');
  const [noOfPlayers, setNoOfPlayers] = useState('');

  useEffect(() => {
    if (!isPlayerLoggedIn) {
      alert("Please Login First");
      Navigate('/login');
    }
  });

  const teamRegister = async (e) => {

    setLoader(true);

    e.preventDefault();
    console.log("tid", tournamentID);
    const { data } = await axios.post(`${server}/tournamentregister/${tournamentID}`, {
      teamName,
      teamNumber,
      teamEmail,
      noOfPlayers,
      playerID
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    }, {
      withCredentials: true,
    });
    if (data.success) {
      // alert(data.message);
      setLoader(false);
      Navigate(`/myprofile/${playerID}`);
    }
    else {
      alert(data.message);
    }
  }

  return (
    <>

      <div className="touranment-register">
        {
          loader ? <Loader /> : <div className="tournament-register-container">

            <h3>Register For Tournament</h3>
            <form onSubmit={teamRegister}>

              <input type="text" name='teamName' required
                placeholder='Team Name'
                onChange={(e) => {
                  setTeamName(e.target.value)
                }}
              />

              <input type="number" name='teamNumber' required
                placeholder='Team Manager Mobile'
                onChange={(e) => {
                  setTeamNumber(e.target.value)
                }}
              />

              <input type="email" name='teamEmail' required
                placeholder='Team Manager Email'
                onChange={(e) => {
                  setTeamEmail(e.target.value)
                }}
              />

              <input type="number" name='noOfPlayers' required
                placeholder='No of Players'
                onChange={(e) => {
                  setNoOfPlayers(e.target.value)
                }}
              />

              <button type='submit'>Register</button>
            </form>

          </div>
        }
      </div>

    </>
  )
}

export default TournamentRegister