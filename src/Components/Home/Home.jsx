import React from 'react'
import img from '../../assets/avataaars.svg'
import style from './home.module.css'

export default function Home() {
  return (
    <div className={`${style.home} d-flex justify-content-center align-items-center text-white`}>
    <div className='text-center'>
    <img src={img} className={`${style.width_250} mb-3`} alt="" />
    <div className='pt-4 text-white text-center'>
      <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>start Framework</h2>
    </div>
    <div className='d-flex justify-content-center align-items-center mb-3'>
      <div className={`${style.line} me-3`} style={{backgroundColor:'white'}}></div>
      <i className='fa-solid fa-star'></i>
      <div className={`${style.line} ms-3`} style={{backgroundColor:'white'}}></div>
    </div>
    <div>Graphic Artist - Web Designer - Illustrator</div>
    </div>
    </div>
  )
}
