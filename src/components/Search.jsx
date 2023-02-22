import { useState, useEffect } from "react"
import { Result } from './Result'

export function Search() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])
    
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q='+query)
            .then((response) => response.json())
            .then((data) => setResults(data));
    },[results])

    return(
        <>
            <input className="form-control" type="text" onChange={(e) => setQuery(e.target.value)} value={query}/>
            {/* Boucler sur result[] pour afficher les résultats dans la page */}
            {results.map((result)=><Result key={result.show.id} details={result}/>)}
        </>
        )
}

