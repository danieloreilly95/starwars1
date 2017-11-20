import React, { Component } from 'react';
import StarInfo from './StarInfo';

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
                <StarInfo starInfo={p} />
              </div>
            )
          })
        }
      </div>
      );
  }
}

export default List;
