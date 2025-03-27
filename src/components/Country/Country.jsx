import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisited, handleFlags }) => {
    const [visit, setVisit] = useState(false)
    
    const handleVisit = () => {
        // if (!visit) {
        //     return setVisit(true);
        // }
        setVisit(!visit)
        handleVisited(country)
    }
    return (
        <div className={`country ${visit && 'visitColor'}`}>
            <h2>name : {country?.name?.common}</h2>
            <p>Official name : {country?.name?.official}</p>
            <p>Independent : {country?.independent ? 'free' : 'Not free'}</p>
            <p>Population : {country?.population }</p>
            <img src={country?.flags?.png} alt="" />
            <button className={visit ? 'btn-visit' :""} onClick={handleVisit}>{visit ? 'visited': 'Not Visit' }</button>
            <button onClick={() => handleFlags(country?.flags?.png)}>VisitedFlags</button>
        </div>
    );
};

export default Country;