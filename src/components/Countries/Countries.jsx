import { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = ({ countriesPromises }) => {
    const data = use(countriesPromises);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisited = (country) => {
        // console.log('country visit click', country);
        const newVisit = [...visitedCountries, country];
        setVisitedCountries(newVisit);
    }
    

    return (
        <div>
            <h2>Countries : {data.length}</h2>
            <h2>Visited Countries : {visitedCountries.length}</h2>
            <ol>
                {
                    visitedCountries.map(country => <li >{country?.name?.common}</li>)
                }
            </ol>
            <div className="layOut">
                {
                    data.map(country => <Country
                        key={country.ccn3}
                        handleVisited={handleVisited}
                        country={country}></Country>)
                }
           </div>
        </div>
    );
};

export default Countries;