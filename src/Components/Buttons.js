import React from 'react'
import mailPhoto from './images/Mail.png'
import linkedinPhoto from './images/linkedin.png'
export default function Buttons() {
  return (
    <div className='btn-div'>
        <button className='email-btn'><img className='mail-Photo' src={mailPhoto} alt="" /> Email</button>
        <button className='linkedin-btn'><img className='linkedin-Photo' src={linkedinPhoto} alt="" /> LinkedIn</button>
    </div>
  )
}
