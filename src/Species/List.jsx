import React, { Component } from 'react';
import SpeciesInfo from './SpeciesInfo';

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
                <h1 className="char-name">{p.name}</h1>
                <SpeciesInfo speciesInfo={p} />
              </div>
            )
          })
        }
      </div>
      );
  }
}

export default List;
