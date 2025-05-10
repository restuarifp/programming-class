import React, {useState} from 'react'

function Name () { 
  const [Name,setName] = useState ('username')
  const [Password,setPassword] = useState ('password')
  const [isform, setisform] = useState (true)
  if (isform) {
    return (
      <div>
        {
          !Name&&<div>'please add name'</div>
        }
        {
           Password? (null) : (<div>'please add password'</div>)
        }
        <h1>{Name}</h1>
        <input onChange={(e)=>setName(e.target.value)} value={Name} />
        <div>
          <h1>{Password}</h1>
          <input onChange={(e)=>setPassword(e.target.value)} value={Password} />
        </div>
        <div> 
          <button onClick={()=>{
            if (Name&&Password){
              setisform (false)
            }
          }
        }> Submit </button>
      
        </div>
      </div>
    )    
  }
  if (!isform) {
    return (
      <div>
        <button onClick={()=>{setisform (true)}}>Logout</button>
      </div>
    )
  }
  if (!Name) {
    return (
      <div>
        please input name
      </div>
    )
  if (!Password) {
    return (
      <div>
        please input password
      </div>
    )
  }
  }
}
function Password () { 
  const [Password,setPassword] = useState ('password')
  return (
    <div>
      <h1>{Password}</h1>
      <input onChange={(e)=>setPassword(e.target.value)} value={Password} />
    </div>
  )    
}
function Submit () {
  const [submit] = useState ('Submit')
  return ( 
    <div> 
      <h1> {submit}</h1>
      <button onClick={()=>{}}> Submit </button>
      
    </div>
  )
}
export default Name;

