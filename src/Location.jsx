import React, { useState } from 'react'


const Location = () => {
const {location,setLocation} = useState("")

  return (
    <div>
      Enter a location : <input type='text' value={location} onChange={setLocation (e.target.value)}></input>
      <button onClick={alert}>Submit</button>
    </div>
  )
}
console.log("location", {location})

export default Location
