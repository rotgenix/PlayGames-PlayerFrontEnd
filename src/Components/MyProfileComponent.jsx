import React from 'react'

const MyProfileComponent = ({ tournamentName, tournamentDate, tournamentTime, sNo }) => {
    return (
        <>

            <div className="participating-tournament">
                <p>{tournamentName}</p>
                <p>{tournamentDate}</p>
                <p>{tournamentTime}</p>
            </div>

        </>
    )
}

export default MyProfileComponent