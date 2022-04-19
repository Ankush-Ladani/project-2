import React from 'react'
import Buttons from './Buttons'
import Photo from './images/Photo.jpeg'
import './index.css'
import Info from './Info'
export default function Navbar() {
  return (
    <div>
        <img className='photo' src={Photo} width='317px' height='317px'  alt="" />
        <Info></Info>
        <Buttons></Buttons>
    </div>
  )
}
