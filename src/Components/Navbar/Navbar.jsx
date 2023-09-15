import React from 'react'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import style from './navbar.module.css'

export default function Navbar() {

  let[navbar,setNavbar]= useState(false)

  let changePadding=()=>{
    if(window.scrollY>=40){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll',changePadding)

  return (
    <nav className={navbar? `navbar navbar-expand-lg fixed-top ${style.grey} `:`navbar navbar-expand-lg  fixed-top ${style.grey} py-4`}>
  <div className="container">
    <NavLink className="navbar-brand fw-bolder fs-2 text-white" to='' >START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <NavLink className="nav-link text-white fw-bold mt-3 mt-md-0 px-2 rounded-3" to='about' style={{width:'fit-content'}}>ABOUT</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className="nav-link text-white fw-bold mt-3 mt-md-0 px-2 rounded-3" to='portfolio'style={{width:'fit-content'}} >PORTFOLIO</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className="nav-link text-white fw-bold mt-3 mt-md-0 px-2 rounded-3" to='contact' style={{width:'fit-content'}}>CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
