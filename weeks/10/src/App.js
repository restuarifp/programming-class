import React, {useState} from 'react'

function Number() {
    const [number, setNumber] = useState(0)
    return (
    <div>
      <h1> {number} </h1>
      <button onClick={()=>{setNumber (number-1)}}> - </button>
      <input onChange={(e)=> setNumber (e.target.value)} value={number} />
      <button onClick={()=>{setNumber (number+1)}}> + </button>
    </div>
  )
}

export default Number;
