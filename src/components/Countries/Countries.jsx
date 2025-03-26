import { use } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = ({ countriesPromises }) => {
    
    const data = use(countriesPromises);
    console.log(data);

    return (
        <div>
            <h2>Countries : {data.length}</h2>
            <div className="layOut">
                {
                    data.map(country => <Country key={country.ccn3} country={country}></Country>)
                }
           </div>
        </div>
    );
};

export default Countries;