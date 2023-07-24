import React, {useState} from 'react'
import {FaBars, FaTimes,FaGithub , FaLinkedin, FaFacebook,FaInstagram } from 'react-icons/fa'

import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import Resume from '../assets/resume.pdf'
import Logo from '../assets/logo2.PNG'




const Navbar = () => {
    

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'>

        <div >
        <Link to='home' smooth={true} duration={500} className='hover:cursor-pointer'>
            <img  src={Logo} alt='logo' style={{ width: '120px' , height: '120px' }} /> 
            </Link>
        </div>

      {/* Menu */}
       
          <ul className='hidden md:flex '>

            <li className='hover:text-orange-300 duration-300'>
            <Link  to="home"  smooth={true}  duration={500} >
            Home
            </Link>
            </li>

            <li className='hover:text-orange-300 duration-300'>
            <Link  to="about"  smooth={true}  duration={500} >
            About
            </Link>
            </li>

            <li className='hover:text-orange-300 duration-300'>
            <Link  to="skills"  smooth={true}  duration={500} >
            Skills
            </Link>
            </li>

            <li className='hover:text-orange-300 duration-300'>
            <Link  to="work"  smooth={true}  duration={500} >
            Work
            </Link>
            </li>

            <li className='hover:text-orange-300 duration-300'>
            <Link  to="contact"  smooth={true}  duration={500} >
            Contact
            </Link>

            </li>
          </ul>
       

       {/* Hamburger */}
        <div onClick={handleClick} className='hover:cursor-pointer md:hidden z-10  '>
           { !nav ? <FaBars className='duration-600'  /> : <FaTimes /> }
        </div>

       {/* Mobile menu */}
        <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
            <li className='py-6 text-4xl hover:text-orange-300 duration-300'>
            {' '}
            <Link onClick={handleClick}  to="home"  smooth={true}  duration={500} >
            Home
            </Link></li>
            <li className='py-6 text-4xl hover:text-orange-300 duration-300'>
            {' '}
            <Link onClick={handleClick}   to="about"  smooth={true}  duration={500} >
            About
            </Link></li>
            <li className='py-6 text-4xl hover:text-orange-300 duration-300'>
            {' '}
             <Link onClick={handleClick}   to="skills"  smooth={true}  duration={500} >
            Skills
            </Link></li>
            <li className='py-6 text-4xl hover:text-orange-300 duration-300'> 
            {' '}
            <Link onClick={handleClick}  to="work"  smooth={true}  duration={500} >
            Work
            </Link></li>
            <li className='py-6 text-4xl hover:text-orange-300 duration-300'> 
            {' '}
            <Link onClick={handleClick}   to="contact"  smooth={true}  duration={500} >
            Contact
            </Link></li>
        </ul>
       
       {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'> 
            <ul>
              
              {/* Linkedin */}
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                <a className='flex justify-between items-center w-full text-gray-300 '
                 href='https://www.linkedin.com/in/khashayar-mir/' target='_blank' rel='noreferrer'>
                  Linkedin  <FaLinkedin size={30} />
                </a>
              </li>

              {/* Github */}
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300 '
                 href='https://github.com/Khash90' target='_blank' rel='noreferrer'>
                  Github  <FaGithub size={30} />
                </a>
              </li>


              {/* Facebook */}
              {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                <a className='flex justify-between items-center w-full text-gray-200 '
                 href='https://www.facebook.com/khashayar.dolatshahi/' target='_blank' rel='noreferrer'>
                  Facebook  <FaFacebook size={30} />
                </a>
              </li> */}


              {/* Instagram */}
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3a0a4c]'>
                <a className='flex justify-between items-center w-full text-gray-300 '
                 href='https://www.instagram.com/khash_regsar/' target='_blank' rel='noreferrer'>
                 
                Instagram
               
                    <FaInstagram size={30} />
                </a>
              </li>


              {/* Resume */}
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#861e10]'>
                <a download={Resume}  className='flex justify-between items-center w-full text-gray-300 '
                 href={Resume}>
                  Resume  <BsFillPersonLinesFill size={30} />
                </a>
              </li>


            </ul>
        </div>

    </div>
  )
}

export default Navbar

