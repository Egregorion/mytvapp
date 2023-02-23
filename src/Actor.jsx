import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Result } from './components/Result';

export function Actor() {
    const params = useParams()
    const [details, setDetails] = useState([])
    const [credits, setCredits] = useState([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/people/' + params.id + '?embed=castcredits')
            .then((response) => response.json())
            .then((data) => setDetails(data))
    }, [details])

    useEffect(()=> {
        fetch('https://api.tvmaze.com/people/' + params.id + '/castcredits?embed[]=show&embed[]=character')
            .then((response)=>response.json())
            .then((data) => setCredits(data))
    }, [credits])

    return(
        <>
            <img src={details.image?.medium} />
            <h2>{details.name}</h2>
            {credits.map((credit, index)=> 
                <Result key={index} details={credit._embedded} />
            )}
        </>  
    )
}