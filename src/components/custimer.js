import React, { useState } from 'react'

const custimer = () => {
    const [customer , setCustomer] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.customer.value);
    }
    const handleclick =  () => {
      if(customer === ""){
        setCustomer("vijay")
        console.log(customer)
      }
      else{
        setCustomer("")
        console.log(customer)
      }
    }
  return ( 
    <div>
    <form onSubmit={handleOnSubmit}>
    <input placeholder='Customer' onChange={(e) => setCustomer(e.target.value)}  name='customer'   value={customer}></input>
    <label>Customer Name</label>
    </form>
    
    </div>
  )
}

export default custimer
