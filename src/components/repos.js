import React from 'react'
import PropTypes from 'prop-types'

const Repos = ({className, titulo, repos }) => (
    <div className={className}>
        <h2>{titulo}:</h2>
        <ul>
            {repos.map((repo, index) => (
                <li key={index}>
                    <a href={repo.link}>{repo.name}</a>
                </li>
            ))}   
        </ul>

    </div>
)

Repos.defaultProps = {
    className: ''
}
Repos.propTypes = {
    className: PropTypes.string,
    titulo: PropTypes.string.isRequired,
    repos: PropTypes.array
}

export default Repos