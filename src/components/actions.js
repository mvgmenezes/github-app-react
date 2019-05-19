import React from 'react'

const Actions = ({handleRepos, handleStarred}) => (
    <div className='actions container form-group'>
        <button className='btn btn-outline-primary' onClick={handleRepos}>Ver Repositorios</button>
        <button className='btn btn-outline-primary' onClick={handleStarred}>Ver favoritos</button>
    </div>
)

export default Actions