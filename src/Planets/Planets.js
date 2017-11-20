import React, { Component } from 'react';
import logo from './logo.svg';
import List from './List';
import axios from 'axios';

class Planets extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [],
    }

    this.getPeople = this.getPeople.bind(this);
  }

  getPeople(){
    return axios.get("https://swapi.co/api/planets")
    .then((response) => {
      console.log(response.data.results);
      this.setState( { people: response.data.results } )
    })
  }

  componentDidMount(){
    this.getPeople()
  }

  filter(e){
    this.setState({filter: e.target.value})
  }

  render() {
    let {people} = this.state;
    if(this.state.filter)
    {
      people = people.filter( item =>
      item.name.toLowerCase()
    .include(this.state.filter.toLowerCase()));
    }
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">Welcome to the Star Wars API</h2>
        <h4>Below is a list of Star Wars Planets</h4>

        <div className="search">
          <input type={"text"} placeholder="Search" onChange={this.filter.bind(this)}/>
        </div>
      </header>
        <List people={people} />
      </div>
    );
  }
}

export default Planets;
