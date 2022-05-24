import React from 'react'
import navloog from '../navlogo.gif'
import '../styles/Header.css'
const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <div className="navbar-brand">
      <img src={navloog} alt="" width="50" height="54" className="d-inline-block align-text-top"/>
     <div>STUDENT ENROLLMENT FORM</div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header