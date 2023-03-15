import React, { useState } from 'react'

function UserForm() {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');

  const submitHandler=(e)=>{
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`)
  }

  return (
    <>
    <form onSubmit={submitHandler}>
      <div>
        <lable>First Name</lable>
        <input type={'text'} value={firstName}
        onChange={e=>setFirstName(e.target.value)}
        />
      </div>
      <div>
        <lable>Last Name</lable>
        <input type={'text'} value={lastName}
        onChange={e=>setLastName(e.target.value)}
        />
      </div>
      <button>Submit</button>
    </form>
    </>
  )
}

export default UserForm