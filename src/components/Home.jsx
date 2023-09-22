import React from 'react'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Resume from '../assets/resume.pdf'



 const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        <p className='my-2 ml-1 text-blue-200'>Hi, My Name Is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Khashayar Mirbabaie</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#eb3737]'>Software Engineer</h2>
        <p className='text-[#37ebb2] py-4 max-w-[700px]'>A Computer Software Engineer graduate with a strong foundation in <strong>Front-End and Back-End development technologies</strong>. Seeking to apply my technical skills and passion for software development in a Junior Developer role.</p>

        <div>
        
           <a download={Resume}  href={Resume} className='w-[140px] text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#641414] hover:border-[#011115] duration-300 rounded-md '>
           
           Resume
             <span className='duration-300'>
                <BsFillPersonLinesFill className='ml-3' />
             </span> 
           </a>
          

           
        </div>

      </div>

    </div>
  )
}

export default Home;