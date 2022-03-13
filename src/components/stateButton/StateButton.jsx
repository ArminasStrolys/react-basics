import React, { useState } from 'react'

export default function StateButton() {
  const [count, setCount] = useState(0)
  return (
    <>
    <span>{count}</span>
    <button onClick={()=>setCount(count+1)}>Count me + (#4)</button>
    <button onClick={()=>setCount(count-1)}>Count me - (#4)</button>
    </>
  )
}
