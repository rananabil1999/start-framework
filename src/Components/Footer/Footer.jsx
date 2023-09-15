import React from 'react'
import style from './footer.module.css'
export default function Footer() {
  return (
    <>
    <div className={`footer ${style.custom}`}>
      <div className={`card-group m-4 ${style.transparent}`}>
        <div className={`card ${style.transparent} ${style.border} text-white`}>
          <div className="card-body text-center">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
        </div>
        <div className={`card ${style.transparent} ${style.border} text-white`}>
          <div className="card-body text-center">
            <h3>AROUND THE WEB</h3>
            <div className="icons">
              <i className={`fa-brands fa-facebook mx-1 ${style.icon}`}></i>
              <i className={`fa-brands fa-twitter mx-1 ${style.icon}`}></i>
              <i className={`fa-brands fa-linkedin mx-1 ${style.icon}`}></i>
              <i className={`fa-solid fa-globe mx-1 ${style.icon}`}></i>
            </div>
          </div>
        </div>
        <div className={`card ${style.transparent} ${style.border} text-white`}>
          <div className="card-body text-center">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </div>
    <div className={`${style.p} text-white text-center`}>
        <p className={style.top_padding}>Copyright © Your Website 2021</p>
      </div>
    </>
  )
}
