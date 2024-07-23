import React, { useState } from 'react'

const custimer = () => {
    const [customer , setCustomer] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.customer.value);
    }
    const handleclick () => {
      if(customer === ""){
        setCustomer("vijay")
      }
      else{
        setCustomer("")
      }
    }
  return ( 
    <div>
    <form onSubmit={handleOnSubmit}>
    <input placeholder='Customer' onChange={(e) => setCustomer(e.target.value)}  name='customer'   value={customer}></input>
    <label>Customer Name</label>
    console.log(customer)
    </form>
    
    </div>
  )
}

export default custimer
