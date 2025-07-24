import React from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundImage from '../assets/gradientBackground.png'  // adjust path as needed

const Hero = () => {
    const navigate = useNavigate();
  return (
    <div
      className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-cover bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

        <div className="text-center mb-6">
            <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>Create content <br/> with <span className='text-blue-600'>AI tools</span></h1>
            <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'> Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.</p>
        </div>
        <div className='flex flex-warp justify-center gap-4 text-sm max-sm:text-xs'>
           <button onClick={()=>navigate('/ai')} className='bg-blue-500 text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'> Start creating now</button> 
           <button className="bg-white text-primary border border-primary px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer"> Watch demo</button>
        </div>
    </div>
  )
}

export default Hero

