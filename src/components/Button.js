import React, { useState } from 'react'
import 

function Button() {
  const [item,addItem]=useState()
  return (
    <Button onclick={()=>addItem}>{"add"}</Button>
  )
}

export default Button