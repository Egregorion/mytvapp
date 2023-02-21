import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Show() {
    const params = useParams()

    useEffect(() => {
        fetch('https://api.tvmaze.com/shows/'+ params.id +'?embed=cast')
          .then((response) => response.json())
          .then((data) => console.log(data))
    })

    return(
        <h2>Cette page est la page avec l'id {params.id}</h2>
    )
}