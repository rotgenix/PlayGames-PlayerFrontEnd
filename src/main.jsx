import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createContext } from 'react';

export const Context = createContext();

const AppWrapper = () => {

  //Global Variables
  const [isPlayerLoggedIn, setIsPlayerLoggedIn] = useState(false);
  const [playerID, setPlayerID] = useState('');
  const [loader, setLoader] = useState(false);

  return (
    <Context.Provider value={{
      isPlayerLoggedIn,
      setIsPlayerLoggedIn,
      playerID, setPlayerID,
      loader, setLoader
    }}>
      <App />
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppWrapper />
)
