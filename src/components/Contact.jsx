import React from 'react'
import {FaFacebook, FaTwitter, FaGoogle} from 'react-icons/fa'
import {ArrowUpRight} from 'lucide-react'
import profil from '../uploads/profil.jpg'

const Contact = () => {
  return (
    <div className='max-w-3xl px-4 m-auto items-start flex flex-col gap-4'>
        <p className="text-sm dark:text-gray-400">Contatct me</p>
      <h2 className='pb-2 text-3xl font-semibold tracking-tight first:m-0 dark:text-gray-100'>I will be happy to work with ...</h2>
        <div className='flex max-lg:flex-col gap-4'>

            <a href='/' className='p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/20 group'>
                < div className='relative'>
                    <img src={profil} alt={profil} className="w-10 h-10 rounded-full object-contain"/>
                    <FaFacebook className="w-4 h-4 text-blue-500 absolute -bottom-1 -right-1 dark:text-white "/>
                </div>
                <div className='mr-auto'>
                    <div className='flex items-center gap-2'>
                        <p className='text-sm font-semibold dark:text-gray-200'> SufyaneRamseyn </p>
                    </div>
                    <p className='text-xs dark:text-gray-300'> 17'0000 </p>
                </div>
                <ArrowUpRight className='dark:text-white group-hover:translate-x-2 group-hover:-transate-y-2 transition-transform' size={16} />
            </a>

            <a href='/' className='p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/20 group'>
                < div className='relative'>
                    <img src={profil} alt={profil} className="w-10 h-10 rounded-full object-contain"/>
                    <FaTwitter className="w-4 h-4 text-blue-500 absolute -bottom-1 -right-1 dark:text-white "/>
                </div>
                <div className='mr-auto'>
                    <div className='flex items-center gap-2 '>
                        <p className='text-sm font-semibold dark:text-gray-200'> SufyaneRamseyn </p>
                    </div>
                    <p className='text-xs dark:text-gray-300'> 20'0000 </p>
                </div>
                <ArrowUpRight className=' dark:text-white group-hover:translate-x-2 group-hover:-transate-y-2 transition-transform' size={16} />
            </a>

            <a href='https://mailto:sufyaneramseyn@gmail.com' className='p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/20 group'>
                < div className='relative'>
                    <img src={profil} alt={profil} className="w-10 h-10 rounded-full object-contain"/>
                    <FaGoogle className="w-4 h-4 text-blue-500 absolute -bottom-1 -right-1 dark:text-white " style={{ backgroundImage: 'linear-gradient(to right, #4285f4, #ea4335, #fbbc05, #34a853)',
                        WebkitBackgroundClip : 'text',
                        backgroundClip : 'text'
                }}/>
                </div>
                <div className='mr-auto'>
                    <div className='flex items-center gap-2'>
                        <p className='text-sm font-semibold dark:text-gray-200'>sufyaneramseyn@gmail.com </p>
                    </div>
                    <p className='text-xs dark:text-gray-300'> Email me for any inquiries </p>
                </div>
                <ArrowUpRight className='dark:text-white group-hover:translate-x-2 group-hover:-transate-y-2 transition-transform' size={16} />
            </a>

        </div>
      
    </div>
  )
}

export default Contact
