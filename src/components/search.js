import React from 'react'

const Search = () => (
    <div className='search'>
        <div className="alert alert-primary" role="alert">
            Digite o nome a ser pesquisado
        </div>
        <input type='form-control' placeholder='Pesquisar' onKeyUp={(e) => {
            
            const value = e.target.value
            //qual tecla foi pressinado
            const key = e.which || e.keyCode
            //igual a 13 o enter foi pressionado
            const ENTER = 13

            if (key==ENTER){
                fetch(`https://api.github.com/users/${value}`).then(
                    (result) => {
                      console.log(result)
                    })
            }
        }}/>
    </div>
)

export default Search