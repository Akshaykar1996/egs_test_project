import React from 'react'
import './Navber.css';
import flag from "../image/logos/flag.svg"

const Navber = () => {
  return (
    <>
      <div className='navber'>

          <div className='logo'>
            <img  className='logo' src="https://media1.thrillophilia.com/thrillo-logo.png" alt="" />
          </div>

          <div className='box'>
            <div className='box-icon'>
             <i className='icon' class="fa-solid fa-magnifying-glass"></i>
             <input className='search' placeholder='search for dubai'></input>
            </div>
          </div>

          <div className='login-section'>
            <img src={flag} alt=''/>
            <p>INR $</p>
            <i class="fa-solid fa-chevron-down"></i>
            <p>login</p>
          </div>

      </div>

      {/* <hr></hr> */}
    </>
  )
}

export default Navber;