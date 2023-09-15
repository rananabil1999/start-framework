import React from 'react'
import style from './about.module.css'

export default function About() {
  return (
    <div className={`${style.about} text-white d-flex justify-content-center align-items-center`}>
      <div>
        <div className='pt-4 text-white text-center'>
          <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>ABOUT COMPONENT</h2>
        </div>
        <div className='d-flex justify-content-center align-items-center mb-3'>
          <div className={`${style.line} me-3`} style={{ backgroundColor: 'white' }}></div>
          <i className='fa-solid fa-star'></i>
          <div className={`${style.line} ms-3`} style={{ backgroundColor: 'white' }}></div>
        </div>
        <div className="container">
          <div className="row px-5">
            <div className="col-md-6 ps-md-5">
              <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
            </div>
            <div className="col-md-6 pe-5">
              <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
