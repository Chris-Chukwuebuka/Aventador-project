import React from 'react'
import "../styles/refresh.css"
import fresh from "../assets/fresh.png"
const Refresh = ({refresh}) => {
  return (
    <div><div className="no-adventure">
      <img src={fresh} alt="" />
      <h2>No Adventures Left</h2>
      <p>Refresh page to view different adventures from the long list of ideas available....</p>
      <button onClick={refresh} className="notbtn">Refresh</button>
    </div>
    </div>
  )
}

export default Refresh