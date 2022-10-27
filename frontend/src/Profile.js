import React from 'react'

const profile = () => {
  return (
  <>
   <form className="needs-validation" onSubmit={Request}>

    <div className="col-12">
          <label htmlFor="district" className="form-label">State</label>
          <input type="text" className="form-control"  value={state} onChange={(e)=>setstate(e.target.value)} placeholder="State" required />
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
          <label htmlFor="district" className="form-label">District</label>
          <input type="text" className="form-control"  value={district} onChange={(e)=>setdistrict(e.target.value)} placeholder="City" required />
          <div className="invalid-feedback">
            Please enter your address.
          </div>
        </div>
   </form>
  </>
  
  )
}

export default profile
