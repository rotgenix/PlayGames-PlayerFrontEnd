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

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/register' element={<Register />} />
          <Route path='/player' element={<PlayerRegistration />} />
          <Route path='/organiser' element={<OrganiserRegister />} />
          <Route path='/login' element={<Login />} />

          <Route path='/tournaments' element={<Tournaments />} />

          <Route path='/dashboard/:id' element={<Dashboard />} />
          <Route path='/createtournament' element={<CreateTournament />} />
          <Route path='/tournaments/teams/:tournamentID' element={<CheckTeams />} />


          <Route path='/tournamentregister/:tournamentID' element={<TournamentRegister />} />
        </Routes>
      </Router>
    </>
  )
}

export default App