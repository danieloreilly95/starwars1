import React, { Component } from 'react';

class VehicleInfo extends Component {
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
    const info = this.props.vehicleInfo;

    if(!this.state.expanded){
      return <p className="btn btn-info" onClick={this.open}>Show info</p>
    }

    return(
      <div className="user-details">
        <p className="btn btn-info" onClick={this.close}>Hide info</p>
        <ul>
        <li><h2>Name: {info.name}</h2></li>
          <li><h2>Model: {info.model}</h2></li>
          <li><h2>Manufacturer: {info.manufacturer}</h2></li>
          <li><h2>Cost in Credits: {info.cost_in_credits}</h2></li>
          <li><h2>Length: {info.length}</h2></li>
          <li><h2>Max Atmosphering Speed: {info.max_atmosphering_speed}</h2></li>
          <li><h2>Crew: {info.crew}</h2></li>
          <li><h2>Passengers: {info.passengers}</h2></li>
          <li><h2>Cargo Capacity: {info.cargo_capacity}</h2></li>
          <li><h2>Consumables: {info.consumables}</h2></li>
          <li><h2>Vehicle Class: {info.vehicle_class}</h2></li>
          <li><h2>Pilots: {info.pilots}</h2></li>
        </ul>
      </div>
    )
  }
}

export default VehicleInfo;
