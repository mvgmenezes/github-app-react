import React from 'react';


const App = () => (
  <div className="app">

    <div className='search'>
      <input type='search' placeholder='Digite o nome do usuario' />
    </div>

    <div className='user-info'>
      <img src='https://avatars1.githubusercontent.com/u/29113078?v=4' />
      <h1>
        <a href='https://github.com/mvgmenezes'>Marcus Menezes</a>
      </h1>

      <ul className='repos-info'> 
        <li>Repositorios: 122</li>
        <li>Seguidores: 122</li>
        <li>Seguindo: 122</li>
      </ul>

      <div className='actions'> 
        <button>Ver Repositorios</button>
        <button>Ver favoritos</button>
      </div>

      <div className='repos'>
        <h2>Repositorios:</h2>
        <ul>
          <li>
            <a href='#'>Nome dos repositorios</a>
          </li>
        </ul>
        
      </div>

      <div className='starred'>
      <h2>Favoritos:</h2>
      <ul>
        <li>
          <a href='#'>Nome dos repositorios</a>
        </li>
      </ul>
        
      </div>
    </div>
  </div>
)

export default App;
