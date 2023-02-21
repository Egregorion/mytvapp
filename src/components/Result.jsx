export function Result(props) {
    const {show} = props.details
    
    return(
        <div>
            {/* //attention toutes les séries ne possèdent pas de miniatures
            //prévoir un rendu conditionnel  */}
            <img src={show.image?.medium || 'http://vignette3.wikia.nocookie.net/lego/images/a/ac/No-Image-Basic.png/revision/latest?cb=20130819001030' } />
            <h2>{show.name}</h2>
        </div>
    )
}