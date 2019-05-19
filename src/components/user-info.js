import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({userinfo}) => (

    <div className='user-info'>

        <img src={userinfo.photo} className="figure-img img-fluid rounded" alt="..." />

        <h1 className='username'>
          <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
        </h1>

        <ul className='repos-info'>
          <li>Repositorios: {userinfo.repos}</li>
          <li>Seguidores: {userinfo.followers}</li>
          <li>Seguindo: {userinfo.following}</li>
        </ul>
    </div>
)

UserInfo.prototype = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string,
    repos: PropTypes.number.isRequired, 
    followers: PropTypes.number.isRequired, 
    following: PropTypes.number.isRequired
  })
}
export default UserInfo