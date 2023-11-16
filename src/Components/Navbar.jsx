import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/navbar.css'

const Navbar = () => {
    return (
        <>

            <nav className='navbar'>
                <div className="nav-container">
                    <Link to={'/'} >
                        <div className="left">
                            <img src="" alt="" />
                            <h1>Paai Esport</h1>
                        </div>
                    </Link>

                    <div className="right">
                        <ul>
                            <li>
                                <Link to={'/'}> <button>Home</button> </Link>
                            </li>

                            <li>
                                <Link to={'/tournaments'}> <button>Tournaments</button> </Link>
                            </li>
                            <li>
                                <Link to={'/register'}> <button>Join</button> </Link>
                            </li>
                            <li>
                                <Link to={'/login'}> <button>Login</button> </Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/paaiesports`}> <button>MyProfile</button> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar