import React from 'react'
import "./renderOne.css"

export default function RenderOne(props) {
  return (
    <div className='jokeCard'>
    <p><b>{props.joke1}</b></p>
    <p>- {props.joke2}</p>
    </div>
  )
}
