import React, {useState, useEffect} from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";


export default function StarWarsList(){
    
    //useState, initial value of an empty array and then setUseState to the response.data.results to loop over
    const [people, setPeople] = useState([]);
    console.log(`This is the empty array`, people);


    useEffect(() =>{
        axios.get(`https://swapi.co/api/people/`)
        .then(response =>{
            // console.log(`This is the result from the API`, response);
            // console.log(`This is the type of API - response`,typeof response);
            // console.log(`This is the result from response.data`, response.data);
            // console.log(`This is the type of response.data`,typeof response.data);
            // console.log(`This is the result from response.data.results`, response.data.results);
            console.log(`This is the type of response.data.results`,typeof response.data.results);
            //Says object, but looks an array. I can use key value pairs to access. 
            const dataResults = response.data.results
            const peopleFromApi = setPeople(dataResults);
            console.log(peopleFromApi);
            //Undefined, but not receiving an error. 
        })
        .catch(err =>{
            console.log(`There was an error fetching data!`, err);
        })
    }, []);

    return (
        <div>
            <div>Hello Worlds!</div>
            {people.map(person =>{
                return(
                    <StarWarsCard
                    name={person.name}
                    birth_year={person.birth_year}
                    gender={person.gender}
                    height={person.height}
                    mass={person.mass}
                    hair_color={person.hair_color}
                    eye_color={person.eye_color}
                    skin_color={person.skin_color}
                    />
                )
            })}
        </div>
    )
}