import React, { Component } from 'react';
import AppContainer from './components/app-container';


class App extends Component {

  constructor(){
    super()
    this.state = {
      userinfo: {
        username: 'Marcus Menezes Silva',
        login: 'mvgmenezes',
        photo: 'https://avatars1.githubusercontent.com/u/29113078?v=4',
        repos: 122, 
        followers: 1, 
        following: 12
      },
      repos: [{
        name: 'Nome do repostirio 1',
        link: 'http://www.google.com.br'
        }, {
        name: 'Nome do repostirio 2',
        link: 'http://www.google.com'
        }],
      starred: [{
        name: 'Nome do repostirio favorito 1',
        link: 'http://www.google.com.br'
        }, {
        name: 'Nome do repostirio favorito 2',
        link: 'http://www.google.com'
        }]
    }
  }

  render() {
    return <AppContainer 
      userinfo={this.state.userinfo} 
      repos={this.state.repos}
      starred = {this.state.starred}
    
    />
  }


}

export default App;
