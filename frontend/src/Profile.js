import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Profile = () => {
   
    
    const[state,setstate]=useState("")
    const[district,setdistrict]=useState("")
    const[city,setcity]=useState("")
    const[pincode,setpincode]=useState("")

    async function Request(e){
       
     e.preventDefault()
        const response=await fetch('http://localhost:4000/verification',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
              state,
              district,
              city,
              pincode
            })
        })

        const data = await response.json()
        console.log(data)
    
    }

  return (
  <>
   <form className="needs-validation" onSubmit={Request}>

    <div className="col-12">
          <label className="form-label">State</label>
          <input type="text" className="form-control"  value={state} onChange={(e)=>setstate(e.target.value)} placeholder="State" required />
        </div>
        <div className="col-12">
          <label  className="form-label">District</label>
          <input type="text" className="form-control"  value={district} onChange={(e)=>setdistrict(e.target.value)} placeholder="District" required />
        </div>
        <div className="col-12">
          <label  className="form-label">City</label>
          <input type="text" className="form-control"  value={city} onChange={(e)=>setcity(e.target.value)} placeholder="City" required />
        </div>
        <div className="col-12">
          <label className="form-label">PinCode</label>
          <input type="text" className="form-control"  value={pincode} onChange={(e)=>setpincode(e.target.value)} placeholder="Pincode" required />
        </div>
        <div className="col-12">
          <button className="btn btn-primary btn-lg" type="submit">Confirm and Send Request</button>
        </div>
   </form>
  </>
  
  )
}

export default Profile
