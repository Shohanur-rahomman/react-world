import React from 'react';

const Country = ({ country }) => {
    console.log(country);
    return (
        <div style={{
            backgroundColor: 'skyblue',
            padding: '20px',
            margin: '20px',
            borderRadius:'20px'
        }}>
            <h2>name : {country.name.common}</h2>
            <p>Official name : {country.name.official}</p>
            <img src={country.flags.png} alt="" />
        </div>
    );
};

export default Country;