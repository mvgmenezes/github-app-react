import React from 'react';
import Search from './components/search';
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';


const App = () => (
  <div className="container-fluid">

    <div className=' container form-group'>

      <Search />

      <UserInfo />

      <Actions />

      <Repos 
        className='repos'  
        titulo='Repositório'
        repos={[{
          name: 'Nome do repostirio 1',
          link: 'http://www.google.com.br'
        },{
          name: 'Nome do repostirio 2',
          link: 'http://www.google.com'
        }]}
      />

      <Repos 
        className='starred'  
        titulo='Favoritos'
        repos={[{
          name: 'Nome do repostirio favorito 1',
          link: 'http://www.google.com.br'
        },{
          name: 'Nome do repostirio favorito 2',
          link: 'http://www.google.com'
        }]}
      />

    </div>
  </div>

)

export default App;
