import React, { Component } from 'react'
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions'
import Repos from './repos';
import PropTypes from 'prop-types'

const AppContainer = ({userinfo, repos, starred}) => (
    <div className="container-fluid">

        <div className=' container form-group'>

            <Search />
            
            {!!userinfo && <UserInfo userinfo={userinfo} />}

            {!!userinfo && <Actions />}

            {!!repos.length && 
                <Repos
                    className='repos'
                    titulo='Repositório'
                    repos={repos}
                />
            }

            {!!starred.length && 
                <Repos
                    className='starred'
                    titulo='Favoritos'
                    repos={starred}
                />
            }

        </div>
      </div>
)

AppContainer.propTypes = {
    userinfo: PropTypes.object, 
    repos: PropTypes.array.isRequired, 
    starred: PropTypes.array
}

export default AppContainer