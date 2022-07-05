function PokemonCard(){
    return (
        <div className="ui card">
            <div>
            <div className="image">
                <img alt="oh no!" />
            </div>
            <div className="content">
                <div className="header">POKEMON NAME HERE</div>
            </div>
            <div className="extra content">
                <span>
                <i className="icon heartbeat red" />
                    POKEMON HP HERE hp
                </span>
            </div>
            </div>
        </div>
    )
}
// seems like the card has already been designed for me
// Im assuming the POKEMON HP HERE and Pokemon NAme here is to plug in that data when creating a new card
// Or maybe its like a fill in with transparent words

export default PokemonCard