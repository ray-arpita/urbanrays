import React from 'react'
import './register.css'
import bannerImage from '../../assets/other_images/banner1.jpg';

const Register = () => {
  return (
    <div className='registration-container' >
        <div className='form-container'>
            <form>
                <div className='input-block'>
                    <label htmlFor='firstName' className='input-label' >Name</label>
                    <input 
                    type='text'
                    name='firstName'
                    id='firstName'
                    placeholder='Enter Your First Name'
                    />
                </div>
                <div className='input-block'>
                    <label htmlFor='lastName' className='input-label' >Last Name</label>
                    <input 
                    type='text'
                    name='lastName'
                    id='lastName'
                    placeholder='Enter Your Last Name'
                    />
                </div>
                <div className='input-block'>
                    <label htmlFor='email' className='input-label' >Email</label>
                    <input 
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter Your Email'
                    />
                </div>
                <div className='input-block'>
                    <label htmlFor='password' className='input-label' >Password</label>
                    <input 
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Create a Password'
                    />
                </div>
                <div className='input-block'>
                    <label htmlFor='confirm-password' className='input-label' >Confirm Password</label>
                    <input 
                    type='password'
                    name='confirm-password'
                    id='confirm-password'
                    placeholder='Confirm Password'
                    />
                </div>
            </form>
            </div> 
            <div className='right-container'>
                <div className='image-container'>
                <img src={bannerImage} className='banner-image'/>
                </div>
            </div>
     
    </div>
  )
}

export default Register
