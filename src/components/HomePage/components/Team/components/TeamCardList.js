import React from 'react'

function TeamCardList(props) {
    return (
        <ul className='list-details'>
            {props.about.map((content) => {
                return (<li>{content}</li>)
            })}
        </ul>
    )
}

export default TeamCardList
