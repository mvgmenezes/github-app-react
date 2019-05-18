import React from 'react';
import Search from './components/search';


const App = () => (
  <div className="container-fluid">

    <div className=' container form-group'>

      <Search />

      <div className='user-info'>

        <img src="https://avatars1.githubusercontent.com/u/29113078?v=4" className="figure-img img-fluid rounded" alt="..." />

        <h1 className='username'>
          <a href='https://github.com/mvgmenezes'>Marcus Menezes</a>
        </h1>

        <ul className='repos-info'>
          <li>Repositorios: 122</li>
          <li>Seguidores: 122</li>
          <li>Seguindo: 122</li>
        </ul>
      </div>

      <div className='actions container form-group'>
        <button className='btn btn-outline-primary'>Ver Repositorios</button>
        <button className='btn btn-outline-primary'>Ver favoritos</button>
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
