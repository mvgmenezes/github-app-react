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

  //metodo que monta a url dinamicamente, com login e o tipo 'repos' ou 'starred'
  getGitHubApiUrl(username, type){
    const internalUser = username ? `/${username}`: ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch(e){
     
    const value = e.target.value
    //qual tecla foi pressinado
    const key = e.which || e.keyCode
    //igual a 13 o enter foi pressionado
    const ENTER = 13

    if (value==='' || value===undefined){
      this.setState({
        userinfo: null,
        repos: [],
        starred: []
      })
      return
    }

    //usando evento sintetico, para usar a variavel 'e' dentro do .then()
    //ou atribuir o 'e' a uma variavel: const target = e.target
    e.persist()

    if (key===ENTER){
        //desabilita o campo de pesquisa
        e.target.disabled = true

        //const urlChamada = `https://api.github.com/users/${value}`
        fetch(this.getGitHubApiUrl(value))
          .then((result) => {
              return result.json();
            }
          ).then(data => {
            //console.log(data.message)
            if (data.message !== undefined){
              alert(data.message)
              return
            }

            this.setState({
              userinfo: {
                username: data.name,
                login: data.login,
                photo: data.avatar_url,
                repos: data.public_repos, 
                followers: data.followers, 
                following: data.following
              },
              repos: [],
              starred: []
            })

        }).then(() => {
          console.log(e)
          e.target.disabled = false
        })
    }
  
  }

  findReposUser(){
    const username = this.state.userinfo.login
    fetch(this.getGitHubApiUrl(username,'repos')).then(result => result.json())
    .then((data) => {
      //console.log(data)
      const repos = data.map((repo) => {
        return {name: repo.name, link: repo.html_url} 
      })

      this.setState({
        repos: repos
      })
    })
  }

  findReposStarredUser(){
    const username = this.state.userinfo.login
    fetch(this.getGitHubApiUrl(username,'starred')).then(result => result.json())
    .then((data) => {
      //console.log(data)
      const starred = data.map((repo) => {
        return {name: repo.name, link: repo.html_url} 
      })

      this.setState({
        starred: starred
      })
    })
  }

  //simplificando as funcoes findReposUser e findReposStarredUser
  findReposGeneric(type){
    const username = this.state.userinfo.login
    fetch(this.getGitHubApiUrl(username,type)).then(result => result.json())
    .then((data) => {
      this.setState({
        [type]: data.map((repo) => {
          return {name: repo.name, link: repo.html_url} 
        })
      })
    })
  }

  render() {
    return <AppContainer 
      userinfo={this.state.userinfo} 
      repos={this.state.repos}
      starred = {this.state.starred}
      handleSearch = {(e) => {this.handleSearch(e)}} //a funcao é chamada via arrow func parar fazer o bind do this e que se possa usar o setState dentro da funcao
      handleRepos = {() =>{this.findReposGeneric('repos')} }//a funcao é chamada via arrow func parar fazer o bind do this e que se possa usar o setState dentro da funcao
      handleStarred = {() =>{this.findReposGeneric('starred')} }//a funcao é chamada via arrow func parar fazer o bind do this e que se possa usar o setState dentro da funcao
    
    />
  }


}

export default App;
