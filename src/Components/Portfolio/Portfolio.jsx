import React, { useState } from 'react'
import style from './portfolio.module.css'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'


export default function Portfolio() {


  let[model,setModel]=useState(false)
  let[imageSrc, setImageSrc] = useState('');

  

  const changeImageSrc = (image) => {
    console.log(image);
    setImageSrc(image);
  }

  function openModel(img){
    setModel(true)
    changeImageSrc(img)
  }
  
  function close(){
    setModel(false)
  }

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("test")) {
        close();
    }
});

  
  return (
    <div className='portfolio mb-4'>
      <div className='pt-4'>
        <div className='text-center pt-4' style={{ color: 'rgb(44, 62, 80)' }}>
          <h2 className='fs-1 mb-3 fw-bolder text-uppercase'>PORTFOLIO COMPONENT</h2>
          <div className='d-flex justify-content-center align-items-center mb-3'>
            <div className={`${style.line} me-3`} style={{ backgroundColor: 'rgb(44, 62, 80)' }}></div>
            <i className='fa-solid fa-star'></i>
            <div className={`${style.line} ms-3`} style={{ backgroundColor: 'rgb(44, 62, 80)' }}></div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className='col-lg-4 col-md-6'>
              <div className="item rounded-3 overflow-hidden position-relative" onClick={()=>openModel(img1)} >
                <img src={img1} className='w-100' alt=""/>
                <div className={`${style.layer} d-flex position-absolute w-100 h-100 top-0 start-0 justify-content-center align-items-center`}>
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className="item rounded-3 overflow-hidden position-relative" onClick={()=>openModel(img2)}>
                <img src={img2} className='w-100' alt="" />
                <div className={`${style.layer} d-flex position-absolute w-100 h-100 top-0 start-0 justify-content-center align-items-center`}>
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className="item rounded-3 overflow-hidden position-relative" onClick={()=>openModel(img3)}>
                <img src={img3} className='w-100' alt="" />
                <div className={`${style.layer} d-flex position-absolute w-100 h-100 top-0 start-0 justify-content-center align-items-center`}>
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className="item rounded-3 overflow-hidden position-relative" onClick={()=>openModel(img1)}>
                <img src={img1} className='w-100' alt="" />
                <div className={`${style.layer} d-flex position-absolute w-100 h-100 top-0 start-0 justify-content-center align-items-center`}>
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className="item rounded-3 overflow-hidden position-relative" onClick={()=>openModel(img2)}>
                <img src={img2} className='w-100' alt="" />
                <div className={`${style.layer} d-flex position-absolute w-100 h-100 top-0 start-0 justify-content-center align-items-center`}>
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className="item rounded-3 overflow-hidden position-relative" onClick={()=>openModel(img3)}>
                <img src={img3} className='w-100' alt="" />
                <div className={`${style.layer} d-flex position-absolute w-100 h-100 top-0 start-0 justify-content-center align-items-center`}>
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={model?`${style.model__} position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center test`:`${style.model__} position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center test d-none`}>
          <img src={imageSrc} alt="" style={{width:'600px'}}/>
        </div>
      </div>
    </div>
  )
}
