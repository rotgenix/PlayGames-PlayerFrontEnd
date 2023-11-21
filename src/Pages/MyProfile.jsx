import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { server } from '../App'
import { Context } from '../main';
import { useNavigate } from 'react-router-dom';


import '../Styles/MyProfile.css'

import MyProfileComponent from '../Components/MyProfileComponent';
import Loader from '../Components/Loader';

const MyProfile = () => {

    const [loader, setLoader] = useState(true);
    const [tournaArray, setTournaArray] = useState([]);
    const Navigate = useNavigate();

    const {
        isPlayerLoggedIn,
        setIsPlayerLoggedIn,
        playerID, setPlayerID
    } = useContext(Context);

    useEffect(() => {
        if (!isPlayerLoggedIn) {
            alert("Please Login First");
            Navigate('/login');
        }

        const fetchMyProfile = async () => {
            let { data } = await axios.get(`${server}/myProfile/${playerID}`, {
            });

            // console.log("data ", data);
            // console.log("Tournaments ", data.participatedTournaments);
            let { playerData } = data;

            let { participatedTournaments } = playerData;
            setTournaArray(data.participatedTournaments);
            setLoader(false);
        }
        fetchMyProfile();
    }, []);


    return (
        <>
            <div className="myprofile">
                {
                    loader ? <Loader /> : <div className="myprofile-container">
                        <h3>Your Registered Tournaments</h3>
                        {
                            tournaArray.map((value, index) => {
                                console.log("value", value);
                                console.log("value", value.tournamentName);
                                console.log("value", value.tournamentDate);
                                console.log("value", value.tournamentTime);
                                return (<MyProfileComponent
                                    tournamentName={value.tournamentName}
                                    tournamentDate={value.tournamentDate}
                                    tournamentTime={value.tournamentTime}
                                    sNo={index + 1}
                                    key={index} />)
                            })
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default MyProfile