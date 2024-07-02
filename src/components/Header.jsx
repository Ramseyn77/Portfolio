import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {FaTwitter, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'

const Header = () => {

  return (
    <div className='top-0 py-4'>
      <div className='max-w-3xl px-4 m-auto flex items-baseline'>
        <h1 className="text-lg dark:text-white font-bold text-primary">sufyaneramseyn.com</h1>
        <div className='flex-1' />
        <ul className='flex items-center gap-2'>
          <button className="dark:border-gray-600 text-foreground border rounded-md p-2 flex flex-col items-center justify-center ">
            <a href="http://">
              <FaGithub className='text-black dark:text-white' size={20} />
            </a>
          </button>
          <button className="dark:border-gray-600 text-foreground border rounded-md p-2 flex flex-col items-center justify-center ">
            <a href="http://">
              <FaFacebook className='text-blue-500 dark:text-white' size={20} />
            </a>
          </button>
          <button className=" text-foreground border dark:border-gray-600 rounded-md p-2 flex flex-col items-center justify-center ">
            <a href="http://">
              <FaLinkedin className='text-blue-700 dark:text-white' size={20} />
            </a>
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
