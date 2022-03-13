import React from 'react'
import RenderJSON from '../renderJSON/RenderJSON'
import "./renderOne.css"

export default function RenderOne(props) {
  return (
    <div className='jokeCard'>
    <p>{props.joke1}</p>
    <br />
    <p>- {props.joke2}</p>
    </div>
  )
}
