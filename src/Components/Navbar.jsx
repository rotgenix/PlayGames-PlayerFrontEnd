import React, { useContext, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import '../Styles/navbar.css'

import { Context } from '../main'
import axios from 'axios'
import { server } from '../App'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'

import { ImCross } from "react-icons/im";

const Navbar = () => {

    const navInitial = {
        left: '0',
        top: '-400px'
    }
    const navFinal = {
        left: '0',
        top: '60px'
    }

    const [verticalNav, setVerticalNav] = useState(false);


    const Navigate = useNavigate();

    const {
        isPlayerLoggedIn,
        setIsPlayerLoggedIn,
        playerID,
        setPlayerID
    } = useContext(Context);


    const logOutHandler = async () => {
        setVerticalNav(!verticalNav)
        const { data } = await axios.get(`${server}/playerLogout`, {
            withCredentials: true,
        });
        // console.log("log out data", data);
        if (data.success) {
            alert(data.message);
            setIsPlayerLoggedIn(false);
            // console.log(isPlayerLoggedIn)
            Navigate('/');
        }
        else {
            alert(data.message);
            setIsPlayerLoggedIn(true);

            // console.log(isPlayerLoggedIn)
        }
    }

    useEffect(() => {

        const isLoggedInFunc = async () => {
            const { data } = await axios.get(`${server}/isLoggedIn`, {
                withCredentials: true,
            });
            // console.log("log check data", data);
            // console.log("log check data", data.playerID);
            if (data.success) {
                // console.log("player is logged in");
                const pID = data.playerID;
                setPlayerID(pID);
                setIsPlayerLoggedIn(true);
            }
            else {
                // console.log("player not logged in");
                setIsPlayerLoggedIn(false);
            }
        }
        isLoggedInFunc();
    })

    return (
        <>
            <nav className='navbar'>
                <div className="nav-container">

                    <div className="left">
                        <Link to={'/'} >
                            {/* <img src="" alt="" /> */}
                            <h1>PlayGames</h1>
                        </Link>
                    </div>


                    <div className="right">
                        <ul
                            style={verticalNav ? navFinal : navInitial}
                        >
                            <li>
                                <Link to={'/'}> <button
                                    onClick={() => {
                                        setVerticalNav(!verticalNav)
                                    }}
                                >Home</button> </Link>
                            </li>

                            <li>
                                <Link to={'/tournaments'}>
                                    <button
                                        onClick={() => {
                                            setVerticalNav(!verticalNav)
                                        }}
                                    >Tournaments</button> </Link>
                            </li>

                            <li>
                                {

                                    isPlayerLoggedIn ? <Link to={`/myprofile/${playerID}`}> <button
                                        onClick={() => {
                                            setVerticalNav(!verticalNav)
                                        }}
                                    >MyProfile</button> </Link>
                                        :
                                        <Link to={'/join'}>
                                            <button onClick={() => {
                                                setVerticalNav(!verticalNav)
                                            }}
                                            >Join</button> </Link>
                                }
                            </li>

                            <li>

                                {
                                    isPlayerLoggedIn ? <button className='log-out-btn' onClick={logOutHandler} >Logout</button>
                                        :
                                        <Link to={'/login'}>
                                            <button onClick={() => {
                                                setVerticalNav(!verticalNav)
                                            }}>Login</button>
                                        </Link>
                                }
                            </li>

                        </ul>
                        <button
                            onClick={() => {
                                setVerticalNav(!verticalNav);
                            }}
                            className='hamburger'
                        >
                            {
                                verticalNav ? <ImCross /> : <GiHamburgerMenu />
                            }
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar