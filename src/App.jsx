import React from 'react'

import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './Styles/App.css'
import Home from './Pages/Home'
import Tournaments from './Pages/Tournaments'
import Register from './Pages/Register'
import PlayerRegistration from './Pages/PlayerRegistration'
import OrganiserRegister from './Pages/OrganiserRegister'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import CreateTournament from './Pages/CreateTournament'
import CheckTeams from './Pages/CheckTeams'
import TournamentRegister from './Pages/TournamentRegister'
import MyProfile from './Pages/MyProfile'

export const server = 'https://playgames-fz1x.onrender.com';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tournaments' element={<Tournaments />} />
          <Route path='/join' element={<PlayerRegistration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/myprofile/:playerID' element={<MyProfile />} />
          <Route path='/tournamentregister/:tournamentID' element={<TournamentRegister />} />
        </Routes>
      </Router>
    </>
  )
}

export default App