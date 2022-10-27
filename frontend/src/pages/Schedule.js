import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Schedule = () => {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[address,setaddress]=useState('')
    const[district,setdistrict]=useState('')
    const[city,setcity]=useState('')
    const[state,setstate]=useState('')
    const[pincode,setpincode]=useState('')
    const[contact,setcontact]=useState('')
    const[date,setdate]=useState('')
    const[time,settime]=useState('')
    const[ename,setename]=useState('')
    const[equantity,setequantity]=useState('')
    const[type,settype]=useState('')
    const[weight,setweight]=useState('')
    const[img1,setimg1]=useState('')
    const[img2,setimg2]=useState('')
    const[img3,setimg3]=useState('')
    const[comment,setcomment]=useState('')

    async function Request(e){
       e.preventDefault()

        const response=await fetch('http://localhost:4000/request',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
               name,
               email,
               address,
               district,
               city,
               state,
               pincode,
               contact,
               date,
               time,
               ename,
               equantity,
               type,
               weight,
               img1,
               img2,
               img3,
               comment    
            })
        })

        const data = await response.json()
        console.log(data)
    }
   
  return (
    <>
    <div>
  
  <div className="container">
    <form className="needs-validation" onSubmit={Request}>
      <div className="row g-3">
      <div className="col-12">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e)=>setname(e.target.value)} id="email" placeholder="Name" required />
          <div className="invalid-feedback">
            Please enter your email address.
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">Email ID</label>
          <input type="email" className="form-control" value={email} onChange={(e)=>setemail(e.target.value)} id="email" placeholder="email" required />
          <div className="invalid-feedback">
            Please enter your email address.
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="address1" className="form-label">Address</label>
          <input type="text" className="form-control"  value={address} onChange={(e)=>setaddress(e.target.value)} id="address1" placeholder="Address" required />
          <div className="invalid-feedback">
            Please enter your address.
          </div>
        </div>
     
        <div className="col-12">
          <label htmlFor="district" className="form-label">District</label>
          <input type="text" className="form-control"  value={district} onChange={(e)=>setdistrict(e.target.value)} placeholder="District" required />
          <div className="invalid-feedback">
            Please enter your address.
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" className="form-control"  value={city} onChange={(e)=>setcity(e.target.value)} id="city" placeholder="city" required />
        </div>
        <div className="col-12">
          <label htmlFor="state" className="form-label">State</label>
          <input type="text" className="form-control"  value={state} onChange={(e)=>setstate(e.target.value)} id="State" placeholder="State" required />
        </div>
        <div className="col-12">
          <label htmlFor="state" className="form-label">Pincode</label>
          <input type="number" className="form-control"  value={pincode} onChange={(e)=>setpincode(e.target.value)} id="Pincode" placeholder="Pincode" required />
        </div>
        <div className="col-12">
          <label htmlFor="state" className="form-label">Contact Number</label>
          <input type="number" className="form-control"  value={contact} onChange={(e)=>setcontact(e.target.value)} id="Contact Number" placeholder="Contact Number" required />
        </div>
       
      
        <div className="col-12">
          <label htmlFor="date_s" className="form-label">Choose Date for pick-up</label>
          <br />
          <input type="date" id="datepicker"  value={date} onChange={(e)=>setdate(e.target.value)} />
        </div>
        <div className="col-12">
          <label htmlFor="time" className="form-label">Choose Time for pick-up</label><br />
          <select className="browser-default custom-select" value={time} onChange={(e)=>settime(e.target.value)} name="time">
            <option selected   />
            <option value="7 AM - 10 AM">7 AM - 10 AM</option>
            <option value="10 AM - 1 PM">10 AM - 1 PM</option>
            <option value="1 PM - 4 PM">1 PM - 4 PM</option>
            <option value="4 PM - 7 PM">4 PM - 7 PM</option>
            <option value="7 PM - 10 PM">7 PM - 10 PM</option>
          </select>
        </div>  
        <div className="col-12">
          <h5>Add Ewaste Detail:</h5>
          <h6> Item 1:</h6>
        </div>
        <div className="col-12">
        <div className="col-12">
          <label htmlFor="state" className="form-label">Ewaste Name</label>
          <input type="text" className="form-control"  value={ename} onChange={(e)=>setename(e.target.value)} id="state" placeholder="Ewaste Name" required />
        </div>
        <div className="col-12">
          <label htmlFor="state" className="form-label">Quantity</label>
          <input type="number" className="form-control"  value={equantity} onChange={(e)=>setequantity(e.target.value)} id="state" placeholder="Quantity" required />
        </div>
        </div>
        <div className="col-12">
          <label htmlFor="state" className="form-label">Ewaste type</label>
          <input type="text" className="form-control"  value={type} onChange={(e)=>settype(e.target.value)} id="state" placeholder="Ewaste type" required />
        </div>   
        <div className="col-12">
          <label htmlFor="state" className="form-label">Weight</label>
          <input type="text" className="form-control"  value={weight} onChange={(e)=>setweight(e.target.value)} id="state" placeholder="Weight" required />
        </div>
        <div className="col-12">
          <label htmlFor="e_img" className="form-label">Upload image</label>
          <div className="col-md-6 mb-4">
            <div className="file-field">
              <div className="btn btn-mdb-color btn-rounded float-left">
                <input type="file"  value={img1} onChange={(e)=>setimg1(e.target.value)} id="e_img1" />
              </div>
              <div className="btn btn-mdb-color btn-rounded float-left">
                <input type="file" value={img2} onChange={(e)=>setimg2(e.target.value)} id="e_img2" />
              </div>
              <div className="btn btn-mdb-color btn-rounded float-left">
                <input type="file" value={img3} onChange={(e)=>setimg3(e.target.value)} id="e_img3" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="Comment" className="form-label"><h6>Add Comment</h6></label>
          <textarea className="form-control" value={comment} onChange={(e)=>setcomment(e.target.value)} id="Comment" rows={3} defaultValue={""} />
        </div>
        <div className="col-12">
          <button className="btn btn-primary btn-lg" type="submit">Confirm and Send Request</button>
        </div>
      </div></form>
  </div></div>

    </>
  )
}

export default Schedule