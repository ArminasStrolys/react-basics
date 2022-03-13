import React, {useState} from 'react'
import './greetForm.css'

export default function GreetForm() {
    function handleClick(e) {
        e.preventDefault();
        console.log(name);
        alert(`Hey, ${name} ${surName}`);
        setName('');
        setSurName('');
      }
      const [name, setName] = useState('')
      const [surName, setSurName] = useState('')
  return (
    <form className='form-6'>
        <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='Name'/>
        {console.log(setName)}
        <br />
        <input value={surName} onChange={e=>setSurName(e.target.value)} type="text" placeholder='Surname'/>
        <br />
        <button onClick={handleClick} type="submit">ENTER (#7)</button>
    </form>
  )
}
