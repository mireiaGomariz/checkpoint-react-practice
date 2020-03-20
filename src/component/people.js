import React from 'react';

const People = props => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
      <button id={props.id} onClick={props.action}>Like!</button>
      <hr />
    </div>
  )
}

export default People
