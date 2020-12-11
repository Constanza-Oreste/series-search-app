import React from 'react'

const Cards = ({serie}) => {
    
    return (
        <div className="cards">
            <img className="cardImage"
                src={serie.show.image.medium}
                alt={serie.show.name + 'poster'}
            />
            <div className="cardContent">
                <h3 className="cardTitle">{serie.show.name}</h3>
                <p><small>Language: {serie.show.language}</small></p>
                <p><small>Rating: {serie.show.rating.average}</small></p>
                <p><small>Official WebSite: {serie.show.officialSite}</small></p>
                <p><small>Genres: {serie.show.genres}</small></p>
                <p><small>Summary: {serie.show.summary}</small></p>
                <p><small>State: {serie.show.status}</small></p>
            </div>
        </div>
    )
}

export default Cards
