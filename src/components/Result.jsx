import { Link } from "react-router-dom"

export function Result(props) {
    
    const {show} = props.details
    
    return(
        <div>
            {/* //attention toutes les séries ne possèdent pas de miniatures
            //prévoir un rendu conditionnel  */}
            <img src={show.image?.medium || 'http://vignette3.wikia.nocookie.net/lego/images/a/ac/No-Image-Basic.png/revision/latest?cb=20130819001030' } />
            <h2>{show.name}</h2>
            <h3>{props.details.character ? props.details.character.name : '' }</h3>
            <Link to={'/show/'+show.id}>Voir les infos</Link>
        </div>
    )
}