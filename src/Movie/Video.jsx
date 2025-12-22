import React from 'react'


const Video = ({ title, description }) => {
    return (
    <div className="w-screen aspect-video pt-56 px-12 ">
      <h1 className="text-5xl font-bold text-white">{title}</h1>

     <p className="w-1/3 my-6 text-white">{description}</p>
      <div>
        <button className="p-2 px-8 font-bold bg-white rounded-md border ">
          <span className="flex">
            <span className="pl-2"> Play</span>
          </span>
        </button>
        <button>
            <span className="pl-2"> More Info</span>
        
        </button>
      </div>
    </div>
  )
}

      

export default Video
