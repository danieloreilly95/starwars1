import React, { Component } from 'react';

class PlanetInfo extends Component {
  constructor(props){
    super(props);

    this.state = {
      expanded: false,
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open(){
    this.setState({ expanded: !this.state.expanded })
  }

  close(){
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const info = this.props.planetInfo;

    if(!this.state.expanded){
      return <p className="btn btn-info" onClick={this.open}>Show info</p>
    }

    return(
      <div className="user-details">
        <p className="btn btn-info" onClick={this.close}>Hide info</p>
        <ul>
          <li><h2>Name: {info.name}</h2></li>
            <li><h2>Rotation Period: {info.rotation_period}</h2></li>
            <li><h2>Orbital Period: {info.orbital_period}</h2></li>
            <li><h2>Diameter: {info.diameter}</h2></li>
            <li><h2>Climate: {info.climate}</h2></li>
            <li><h2>Gravity: {info.gravity}</h2></li>
            <li><h2>Terrain: {info.terrain}</h2></li>
            <li><h2>Surface Water: {info.surface_water}</h2></li>
            <li><h2>Population: {info.population}</h2></li>
        </ul>
      </div>
    )
  }
}

export default PlanetInfo;
