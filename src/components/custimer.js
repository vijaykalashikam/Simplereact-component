import React, { useState } from 'react'

const custimer = () => {
    const [customer , setCustomer] = useState("")
  return ( 
    <div>
    value={customer}
      <button>Customer Name</button>
    </div>
  )
}

export default custimer
