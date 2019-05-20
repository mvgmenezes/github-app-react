import React from 'react'
import PropType from 'prop-types'

const Actions = ({handleRepos, handleStarred}) => (
    <div className='actions container form-group'>
        <button className='btn btn-outline-primary' onClick={handleRepos}>Ver Repositorios</button>
        <button className='btn btn-outline-primary' onClick={handleStarred}>Ver favoritos</button>
    </div>
)

Actions.propType = {
    handleRepos: PropType.func.isRequired, 
    handleStarred: PropType.func.isRequired
}

export default Actions