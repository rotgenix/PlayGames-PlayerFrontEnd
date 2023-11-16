import React from 'react'
import '../Styles/GameCard.css'

const GameCard = ({ img, text }) => {
    return (
        <>
            <div className="games-card">
                <img src={img} alt="" />
                <h3>{text}</h3>
            </div>

        </>
    )
}

export default GameCard