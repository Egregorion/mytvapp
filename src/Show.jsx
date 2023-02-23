import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export function Show() {
    const params = useParams()
    const [show, setShow] = useState([])
    const [actors, setActors] = useState([])
        
    useEffect(() => {
        fetch('https://api.tvmaze.com/shows/'+ params.id +'?embed=cast')
          .then((response) => response.json())
          .then((data) => { 
            setShow(data)
            setActors(data._embedded.cast)
            }
          )
        }, [show]   
    )

    return(
        <div className="row">
            <h2>{show.name}</h2>
            <div className="col-12 col-md-6">
                <img src={show.image?.medium} alt="" />
            </div>
            <div className="col-12 col-md-6">{show.summary}</div>
            {actors.map((actor) => 
                <li><Link to={'/actor/'+ actor.person.id}>{actor.person.name}</Link></li>
            )}
        </div>
        
    )
}