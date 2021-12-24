import React from 'react'

function ClientCard(props) {
    return (
        <img className="card-image" alt={props.src+'image'} src={props.src}/>
    )
}

export default ClientCard
