import React from 'react'
import { useParams } from 'react-router-dom'
export default function Profile() {
  var{name,dsg,salary}=useParams()
  return (
   <>
    <h1>Profile Page</h1>
    <h2>Name: {name}</h2>
    <h2>Desigation : {dsg}</h2>
    <h2>Salary: {salary}</h2>
   </>
  )
}