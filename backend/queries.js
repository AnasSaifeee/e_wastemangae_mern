const signup_query= "INSERT INTO signup_data (name, username, email, role, password, confirmpassword) VALUES (?,?,?,?,?,?)"
const signin_query=  "SELECT * FROM signup_data WHERE email = ? AND password = ?"
const request_query="INSERT INTO request (name, email, address, district, city, state,pincode,contact_number,date,time,ename,equantity,type,weight,img1,img2,img3,comment) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
const redundancy_check_query="DELETE FROM signup_data WHERE id NOT IN (SELECT MIN(id) FROM signup_data GROUP BY name,username,email,role, password, confirmpassword)"

module.exports={
    signup_query,
    signin_query,
    request_query,
    redundancy_check_query
}