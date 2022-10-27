const SIGNUP_QUERY= "INSERT INTO signup_data (name, username, email, role, password, confirmpassword) VALUES (?,?,?,?,?,?)"
const SIGNIN_QUERY=  "SELECT * FROM signup_data WHERE email = ? AND password = ?"
const REQUEST_QUERY="INSERT INTO request (name, email, address, district, city, state,pincode,contact_number,date,time,ename,equantity,type,weight,img1,img2,img3,comment) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
const REDUNDANCY_CHECK_QUERY="DELETE FROM signup_data WHERE id NOT IN (SELECT MIN(id) FROM signup_data GROUP BY name,username,email,role, password, confirmpassword)"
const VERIFICATION_QUERY="INSERT INTO collector_verification (state,district,city,pincode) VALUES (?,?,?,?)"
module.exports={
    SIGNUP_QUERY,
    SIGNIN_QUERY,
    REQUEST_QUERY,
    REDUNDANCY_CHECK_QUERY,
    VERIFICATION_QUERY
}