import React from 'react';

import HTML from '../assets/html.png'
import CSS  from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import TailWind from '../assets/tailwind.png'
import ReactIcon from '../assets/react.png'
import Sequelize from '../assets/sequelize.png'
import SQLite from '../assets/sqlite.png'
import NodeJs  from '../assets/node.png'
import Github from '../assets/github.png'
import TypeScript from '../assets/ts.png'



const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#0a192f] text-blue-300'>

    {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full '>
            <div >
                <p className='text-4xl text-bold inline border-b-4 rounded-md border-[#eb3737]'>Skills</p>
                <p className='py-4'>These are the technologies that I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>

               
                {/* Icons of skills */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='Css icon' />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='Javascript icon' />
                    <p className='my-4'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TypeScript} alt='Typescript icon' />
                    <p className='my-4'>TypeScript</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={NodeJs} alt='Node icon' />
                    <p className='my-4'>Node.Js</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TailWind} alt='Tailwind icon' />
                    <p className='my-4'>Tailwind</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactIcon} alt='React icon' />
                    <p className='my-4'>React</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={SQLite} alt='SQLite icon' />
                    <p className='my-4'>SQLie</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Sequelize} alt='Sequelize icon' />
                    <p className='my-4'>Sequelize</p>
                </div>

                

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt='Github icon' />
                    <p className='my-4'>Github</p>
                </div>

                

            </div>
        </div>
    
    </div>
  )
}

export default Skills