import {React,ComponentPropsWithoutRef} from 'react'
import profil from '../uploads/profil.jpg'
import {FaTwitter, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'

const Hero = () => {
  return (
        <div className='max-w-3xl px-4 m-auto flex max-md:flex-col items-start'>
            <div className='flex-[2] flex flex-col gap-2'>
                <h2 className='font-caption text-5xl text-primary dark:text-gray-100'>Sufyane Ramseyn</h2>
                <h3 className='text-3xl font-caption dark:text-gray-200'>
                    Software developer and creator
                </h3>
                <p className='dark:text-gray-300'>
                    I love creating content on 
                    <a className='bg-accent/50 border border-accent  p-1 m-1 dark:border-gray-600 rounded-md text-primary gap-2 inline-flex rounded-sm'>
                        <FaTwitter className='text-sky-400 dark:text-white h-4 w-4 inline mt-1' />
                        Twitter
                    </a>,
                    currently posting on
                    <a className='bg-accent/50 border border-accent p-1 m-1  dark:border-gray-600 rounded-md text-primary gap-2 inline-flex rounded-sm'>
                        <FaLinkedin className='text-blue-700 dark:text-white h-4 w-4 inline mt-1' />
                        Linkedin
                    </a>.
                    Living at 
                    <a className='bg-accent/50 border border-accent  p-1 m-1 dark:border-gray-600 rounded-md text-primary gap-2 inline-flex rounded-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="benin" width={30} height={30} className='h-4 w-4 inline mt-1'>
                        <path fill="#6da544" d="M0 85.337h512v341.326H0z"></path>
                        <path fill="#ffda44" d="M196.641 85.337H512V256H196.641z">
                        </path><path fill="#d80027" d="M196.641 256H512v170.663H196.641z"></path>
                    </svg>
                        Benin
                    </a>
                </p>
            </div>
            <div className="flex-1">
                <img src={profil} alt="hero" srcset="" className='w-60 h-auto rounded-full max-w-xs' />
            </div>
        </div>
  )
}

export default Hero
