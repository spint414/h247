import React from 'react'
import './card.css'

function Card({date, year, title}) {
    return (
        <div className='news__features-tabs_card'>
            <div className="news__features-tabs_card-date">
                <p>{date}</p>
                <p>{year}</p>
            </div>
            <h3>{title}</h3>
        </div>
    )
}

export default Card
