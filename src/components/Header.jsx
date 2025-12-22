import React from 'react'
import image from '../assets/image/user.png'
import NavBar from './NavBar'

function Header() {
  return (
    <>
      <div id='h'>

        <button className='btn btn-sm btn-danger mt-4' id='logout'>Log out</button>
        <img id='user' src={image} />
      </div>





    </>

  )
}

export default Header
