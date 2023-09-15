import React, { useState } from 'react'
import style from './contact.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Contact() {

    function sumbit(values){
        console.log(values);
    }

    const validationSchema = Yup.object({
        name:Yup.string().min(2,'min length is 2').max(7,'max length is 7').required('name is required'),
        age:Yup.string().matches(/^([1-7][0-9]|80)$/).required('age is required'),
        email:Yup.string().required('email is required').email('email is not valid'),
        password:Yup.string().matches(/^[A-z][a-z0-9]{5,10}$/,'password does not match').required('password is required')

    })

    // function validation(values){
    //     let errors ={}
    //     if(!values.name){
    //         errors.name = 'name is required'
    //     }else if(!/^[A-Z0-9][a-z]{5,10}$/.test(values.name)){
    //         errors.name = 'no match'
    //     }

    //     if(!values.email){
    //         errors.email = 'email is required'
    //     }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    //         errors.email = 'no match'
    //     }

    //     return errors

    // }

    let formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit:sumbit
    })

    let [label1, setLabel1] = useState(false)
    let [label2, setLabel2] = useState(false)
    let [label3, setLabel3] = useState(false)
    let [label4, setLabel4] = useState(false)

    function userName() {
        if (document.getElementById('userName').value !== '') {
            setLabel1(true)
        } else {
            setLabel1(false)
        }
    }
    function userAge() {
        if (document.getElementById('userAge').value !== '') {
            setLabel2(true)
        } else {
            setLabel2(false)
        }
    }
    function userEmail() {
        if (document.getElementById('userEmail').value !== '') {
            setLabel3(true)
        } else {
            setLabel3(false)
        }
    }
    function userPassword() {
        if (document.getElementById('userPassword').value !== '') {
            setLabel4(true)
        } else {
            setLabel4(false)
        }
    }

    return (
        <div className={`mb-4 ${style.contact}`}>
            <div className='pt-3'>
                <div className='text-center pt-4' style={{ color: 'rgb(44, 62, 80)' }}>
                    <h2 className='fs-1 mb-3 fw-bolder text-uppercase'>CONTACT SECTION</h2>
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <div className={`${style.line} me-3`} style={{ backgroundColor: 'rgb(44, 62, 80)' }}></div>
                        <i className='fa-solid fa-star'></i>
                        <div className={`${style.line} ms-3`} style={{ backgroundColor: 'rgb(44, 62, 80)' }}></div>
                    </div>
                </div>
                <form className={`w-50 p-3 mx-auto mt-5 ${style.w_100}`} onSubmit={formik.handleSubmit}>
                    <label htmlFor="userName" className={label1 ? `position-relative top-0 ` : `position-relative top-0 ${style.__top}`}>userName : </label>
                    <input type="text" id='userName' placeholder='userName' name='name' onKeyUp={userName} className='form-control border-0 border-bottom py-3 position-relative' onChange={formik.handleChange}  value={formik.values.name} onBlur={formik.handleBlur}/>
                    {formik.errors.name && formik.touched.name?<p className='alert alert-danger'>{formik.errors.name}</p>:''}
                    <label htmlFor="userAge" className={label2 ? `position-relative top-0 ` : `position-relative top-0 ${style.__top}`}>userAge : </label>
                    <input type="text" id='userAge' placeholder='userAge' name='age' onKeyUp={userAge} className='form-control border-0 border-bottom py-3 position-relative' onChange={formik.handleChange}  value={formik.values.age} onBlur={formik.handleBlur} />
                    {formik.errors.age && formik.touched.age?<p className='alert alert-danger'>{formik.errors.age}</p>:''}
                    <label htmlFor="userEmail" className={label3 ? `position-relative top-0 ` : `position-relative top-0 ${style.__top}`}>userEmail : </label>
                    <input type="email" id='userEmail' placeholder='userEmail' name='email' onKeyUp={userEmail} className='form-control border-0 border-bottom py-3 position-relative' onChange={formik.handleChange}  value={formik.values.email} onBlur={formik.handleBlur}/>
                    {formik.errors.email && formik.touched.email?<p className='alert alert-danger'>{formik.errors.email}</p>:''}
                    <label htmlFor="userPassword" className={label4 ? `position-relative top-0 ` : `position-relative top-0 ${style.__top}`}>userPassword : </label>
                    <input type="password" id='userPassword' placeholder='userPassword' name='password' onKeyUp={userPassword} className='form-control border-0 border-bottom py-3 position-relative' onChange={formik.handleChange}  value={formik.values.password} onBlur={formik.handleBlur}/>
                    {formik.errors.password && formik.touched.password?<p className='alert alert-danger'>{formik.errors.password}</p>:''}
                    <button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn mt-4 text-white' style={{ backgroundColor: '#1abc9c' }}>send Message</button>
                </form>
            </div>
        </div>
    )
}
