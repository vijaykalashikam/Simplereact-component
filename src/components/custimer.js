import React, { useState } from 'react'

const custimer = () => {
    const [customer , setCustomer] = useState("")
    const handleclick () => {
      if(customer === ""){
        setCustomer("vijay")
      }
      else{
        setCustomer("")
      }
    }
  return ( 
    <>
    <h1>{customer}</h1>
    <button onClick={handleclick}>click</button>
    </>
  )
}

export default custimer
