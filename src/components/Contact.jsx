import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
            <form action='https://getform.io/f/6a85319f-c39a-4128-95c1-ea5c77d64929' method='POST' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl text-bold inline text-blue-300 border-b-4 rounded-md border-[#eb3737]'>Contact</p>
                    <p className='py-4 text-blue-300'>
                      Submit the form or send me an email - <u> khash.mg@gmail.com</u>
                    </p>
                    
                </div>

                <input className='p-2 bg-[#99a6d1] placeholder-black' type='text'  placeholder='Name' name='name'  required />
                <input className='placeholder-black my-4 p-2 bg-[#99a6d1] ' type='email'  placeholder='Email' name='email' required />
                <textarea className='bg-[#99a6d1] p-2 placeholder-black' placeholder='Message...' name='message' rows='10'  required></textarea>

                <button className='px-4 py-3 my-8 mx-auto flex items-center  text-blue-300 border-2 hover:bg-[#eb3737] ' required >Let's Collaborate</button>

            </form>
    </div>
  )
}

export default Contact