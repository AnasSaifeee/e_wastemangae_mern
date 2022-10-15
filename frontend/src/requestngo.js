import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/home.css'
import './Dashboard'
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./Images', false, /\.(png|jpe?g|svg)$/));
const requestngo = ('/requestngo', () => {
    return (
        <>
            
        </>
    )
  
}) ; 
export default requestngo
