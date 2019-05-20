import React from 'react'
import PropType from 'prop-types'

const Search = ({isDisabled, handleSearch}) => (
    <div className='search'>
        <div className="alert alert-primary" role="alert">
            Digite o nome a ser pesquisado
        </div>
        <input type='form-control' placeholder='Pesquisar' onKeyUp={handleSearch} disabled={isDisabled}/>
    </div>
)

Search.propType = {
    handleSearch: PropType.func.isRequired,
    isDisabled: PropType.bool.isRequired
}
export default Search