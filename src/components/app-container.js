import React, { Component } from 'react'
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions'
import Repos from './repos';

const AppContainer = ({userinfo, repos, starred}) => (
    <div className="container-fluid">

        <div className=' container form-group'>

            <Search />
            
            {!!userinfo && <UserInfo />}

            {!!userinfo && <Actions />}

            {!!repos.length && 
                <Repos
                    className='repos'
                    titulo='Repositório'
                    repos={[{
                    name: 'Nome do repostirio 1',
                    link: 'http://www.google.com.br'
                    }, {
                    name: 'Nome do repostirio 2',
                    link: 'http://www.google.com'
                    }]}
                />
            }

            {!!starred.lenght && 
                <Repos
                    className='starred'
                    titulo='Favoritos'
                    repos={[{
                    name: 'Nome do repostirio favorito 1',
                    link: 'http://www.google.com.br'
                    }, {
                    name: 'Nome do repostirio favorito 2',
                    link: 'http://www.google.com'
                    }]}
                />
            }

        </div>
      </div>
)

export default AppContainer