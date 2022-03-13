import React from 'react'
import RenderJSON from '../renderJSON/RenderJSON'
import "./renderOne.css"

export default function RenderOne(props) {
  return (
    <div className='jokeCard'>
    <p><b>{props.joke1}</b></p>
    <br />
    <p>- {props.joke2}</p>
    </div>
  )
}
