import React, { Component } from 'react';

class MovieInfo extends Component {
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
    const info = this.props.MovieInfo;

    if(!this.state.expanded){
      return <p className="btn btn-info" onClick={this.open}>Show info</p>
    }

    return(
      <div className="user-details">
        <p className="btn btn-info" onClick={this.close}>Hide info</p>
        <ul>
          <li><h2>Title: {info.title}</h2></li>
            <li><h2>Episode: {info.episode_id}</h2></li>
            <li><h2>Opening Crawl: {info.opening_crawl}</h2></li>
            <li><h2>Director: {info.director}</h2></li>
            <li><h2>Producer: {info.producer}</h2></li>
            <li><h2>Release Date: {info.release_date}</h2></li>
        </ul>
      </div>
    )
  }
}

export default MovieInfo;
