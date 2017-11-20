import React, { Component } from 'react';

class SpeciesInfo extends Component {
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
    const info = this.props.speciesInfo;

    if(!this.state.expanded){
      return <p className="btn btn-info" onClick={this.open}>Show info</p>
    }

    return(
      <div className="user-details">
        <p className="btn btn-info" onClick={this.close}>Hide info</p>
        <ul>
          <li><h2>Name: {info.name}</h2></li>
          <li><h2>Classification: {info.classification}</h2></li>
          <li><h2>average Height: {info.average_height}</h2></li>
          <li><h2>Skin Colors: {info.skin_colors}</h2></li>
          <li><h2>Hair Colors: {info.hair_colors}</h2></li>
          <li><h2>Eye Colors: {info.eye_colors}</h2></li>
          <li><h2>Average Lifespan: {info.average_lifespan}</h2></li>
         <li><h2>Language: {info.language}</h2></li>


        </ul>
      </div>
    )
  }
}

export default SpeciesInfo;
