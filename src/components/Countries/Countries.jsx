import { use } from "react";
import Country from "../Country/Country";


const Countries = ({ countriesPromises }) => {
    
    const data = use(countriesPromises);
    console.log(data);

    return (
        <div>
            <h2>Countries : {data.length}</h2>
            {
                data.map(country => <Country key={country.id} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;