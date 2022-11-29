import React from 'react'

const CardUser = ({ user }) => {
    

    return (
        <article className='card'>
            <h1>Clase 2.2</h1>
            <img src={user?.picture.large} alt="" />
            <h3>Nombre: {`${user?.name.first} ${user?.name.last}`}</h3>
            <h3>Email: {`${user?.email}`}</h3>
            <h3>Pais: {`${user?.location.country}`}</h3>

        </article>

    )
}

export default CardUser