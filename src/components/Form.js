import React, { useState } from 'react'

function Form() {
  const [username,setusername]=useState('')

  function handleUserNameChange(e){
    setusername(e.target.value)
    // alert(username)
  }

  function submitHandler(e){
    e.preventDefault();
    alert(username)
  }

  return (
    <>
    <form onSubmit={submitHandler}>
      <div>
        <lable>userName</lable>
        <input type='text' value={username} onChange={handleUserNameChange}/>
        <button>Submit</button>
      </div>
      <div>
        <lable>Commnets</lable>
      </div>
    </form>
    </>
  )
}

export default Form