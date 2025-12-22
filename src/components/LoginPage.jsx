import React, { useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import Body from './Body'
import Logo from './Logo'

function LoginPage() {
  const [IsSignin, setSigin] = useState(true)
  const navigate = useNavigate()

  const toggleSignUp = () => {
    setSigin(!IsSignin)
  }

  const handleSubmit = (x) => {
    x.preventDefault();
    navigate("/search");
  };

  return (

    <>
      <div className='bg'>
        <Logo />
      </div>
      <div className='position-absolute '>
        <img id="bg" src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_large.jpg" alt="bg" srcset="" />
      </div>
      <form onSubmit={handleSubmit}>

        <div className="d-flex  rounded-8 justify-content-center align-items-center vh-100 opacity-75">
          <div className="card p-4  shadow p-6 mb-4 gap-3 bg-black text-white " style={{ width: "350px", height: "410px" }}>
            <h4 className="text-center mb-3">{IsSignin ? "Sign in" : "Sign up"}</h4>

            <div className="mb-3">

              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
              />

              {/* {!IsSignin && (
          <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="tesxt"
            className="form-control"
            placeholder="Enter Name"/>
        )} */}
              <div>

              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <button type='submit' className="btn btn-danger w-100">
              {IsSignin ? "Sign in" : "Sign up"}
            </button>


            <p className='cursor-pointer' onClick={toggleSignUp}>New to Netflix ? Sign up</p>
          </div>
        </div>
      </form>

    </>


  )
}

export default LoginPage