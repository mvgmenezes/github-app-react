import React, { Component } from 'react';
import AppContainer from './components/app-container';


class App extends Component {

  constructor(){
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
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
