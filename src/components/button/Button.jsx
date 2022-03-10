import React from 'react'

export default function Button(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log(`You clicked button ${props.num}.`);
    alert(`You clicked on a button number: ${props.num}`);
  }
  return (
    <button onClick={handleClick}>Button {props.num} (#3)</button>
  )
}
