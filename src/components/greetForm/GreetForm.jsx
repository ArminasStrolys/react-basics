import React, {useState} from 'react'

export default function GreetForm() {
    function handleClick(e) {
        e.preventDefault();
        console.log(name);
        alert(`Hey, ${name} surname`);
      }
      const [name, setName] = useState('')
  return (
    <form>
        <input onChange={setName} type="text" placeholder='Name'/>
        {console.log(setName)}
        <br />
        <input type="text" placeholder='Surname'/>
        <br />
        <button onClick={handleClick} type="submit">ENTER</button>
    </form>
  )
}
