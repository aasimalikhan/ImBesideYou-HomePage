import React from 'react'
import './TeamCard.css'
import TeamCardList from './TeamCardList'

function TeamCard(props) {
    return (
        <div className='team-card'>
            <img src={props.image} alt={props.name + 'image'}/>
            <div className='team-card-container'>
                <p className="team-card-name">{props.name}</p>
                <TeamCardList about={props.about}/>
            </div>
        </div>
    )
}

export default TeamCard
