import React from 'react'
import './NewsCard.css'

function NewsCard(props) {
    return (
        <div>
            <p className='news-card-title'>{props.date} {props.type} {props.title}</p>
            <a href={props.link} className='news-card-description'>{props.description}</a>
        </div>
    )
}

export default NewsCard
