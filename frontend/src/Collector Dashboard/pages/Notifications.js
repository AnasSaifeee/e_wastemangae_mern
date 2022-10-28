import React from 'react'
import { json } from 'react-router-dom'
import './Notifications.css'
const Notifications = () => {


   const fetchdata=async()=>{
    const response=await fetch("http://localhost:4000/getrequest", {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			}})
    const json = await response.json()
   }
  return (
    <>
    <div className="container notification">
          <strong><p>{json.name} has requested for the pickup</p></strong>
          <p className='detail'>Click to view details</p>
    </div>
    </>
  )
}

export default Notifications