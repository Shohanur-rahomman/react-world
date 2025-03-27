import { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = ({ countriesPromises }) => {
    const data = use(countriesPromises);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitFlags,setVisitFags]= useState([])
    const handleVisited = (country) => {
        // console.log('country visit click', country);
        const newVisit = [...visitedCountries, country];
        setVisitedCountries(newVisit);
    }

    const handleFlags = (flags) => {
        const newFlags = [...visitFlags, flags];
        setVisitFags(newFlags)
    }
    

    return (
        <div>
            <h2>Countries : {data.length}</h2>
            <h2>Visited Countries : {visitedCountries.length}</h2>
            <div className="visit-flag">
                {
                    visitFlags.map((flag,index) => <img key={index} src={flag }></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map((country,index) => <li key={index} >{country?.name?.common}</li>)
                }
            </ol>
            <div className="layOut">
                {
                    data.map(country => <Country
                        key={country.cca3}
                        handleVisited={handleVisited}
                        handleFlags={handleFlags}
                        country={country}></Country>)
                }
           </div>
        </div>
    );
};

export default Countries;