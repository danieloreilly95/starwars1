import React, { Component } from 'react';
import MovieInfo from './MovieInfo';

class List extends Component {
  render() {
    const people = this.props.people;

    return (
      <div className="">
        {
        people.map((p) => {
          console.log(p)
            return (
              <div key={p.url}>
                <h1 className="char-name">{p.title}</h1>
                <MovieInfo MovieInfo={p} />
              </div>
            )
          })
        }
      </div>
      );
  }
}

export default List;
