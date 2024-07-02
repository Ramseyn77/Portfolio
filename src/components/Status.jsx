import React from 'react'
import {Home, Code, StickyNote, Rss, MessageCircle, Weight, ArrowUpRight, ALargeSmall } from 'lucide-react'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import profil from '../uploads/profil.jpg'

const Status = () => {
    const sideProject = [
        {
            logo:Code,
            title:'CodeLine',
            description : 'A platform for developers to share their knowledge',
            url: ''
        },
        {
            logo:StickyNote,
            title:'PowerNote',
            description : 'A platform for developers to share their knowledge',
            url:''
        },
        {
            logo:Rss,
            title:'PowerPost',
            description : 'A platform for developers to share their knowledge',
            url:''
        },
        {
            logo:MessageCircle,
            title:'Chat2Code',
            description : 'A platform for developers to share their knowledge',
            url:''
        },
        {
            logo:Weight,
            title:'LinkeLeads',
            description : 'A platform for developers to share their knowledge',
            url:''
        },
        // {
        //     logo:ALargeSmall,
        //     title:'BulkCorrector',
        //     description : 'A platform for developers to share their knowledge',
        //     url:''
        // }
    ]

    const works = [
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlTzcgPDGtALWnrner_GYRafXsZvfgSjiEiQ&s',
            title:'SoBAPS S.A',
            description : 'Stagier Founder',
            date:'now',
            url: 'https://sobaps.bj'
        },
        {
            image:'https://api.ikanwa.com/logos/DEcwmNEp3UDMgwaiQANjlDQpmhdUHyxL.png',
            title:'Edoutech',
            description : 'Stagier Software Developer',
            date:'2023',
            url: 'https://edoutech.com'
        },
    ]

  return (
    <div className='max-w-3xl px-4 m-auto flex max-md:flex-col items-start dark:text-gray-200 '>
       <div className='flex-[3] w-full '>
            <div className='flex-[2] p-4 flex flex-col gap-2 border border-accent dark:bg-[#1b1b1b] rounded-md mr-3 dark:border-gray-600'>
                <p className="text-lg text-muted-foreground">Side, Fun projects </p>
                <div className="flex flex-col gap-5">
                    {
                        sideProject.map((item, i) => {
                            return (
                                <a href={item.url} key={i} className='flex flex-row inline items-center gap-4 p-1 hover:bg-accent/50 transition-colors'>
                                    <span className='font-semibold dark:bg-gray-500 text-white bg-black dark:text-accent-foreground p-3 rounded-sm' >
                                        <item.logo size={16}/>
                                    </span>
                                   <div className="flex flex-col">
                                        <p className='text-lg font-semibold'> {item.title} </p>
                                        <p className='text-sm dark:text-gray-300'> {item.description} </p>
                                   </div>
                                </a> 
                            )
                        })
                    }
                </div>
            </div>
       </div>
        <div className="flex-[2] flex flex-col gap-4 w-full">
            <div className=' flex-1 p-4 border border-accent rounded-md dark:bg-[#1b1b1b] dark:border-gray-600'>
                Work
                <div className='flex flex-col gap-5'>
                    {
                        works.map((item,i) => (
                            <a href={item.url} key={i} className='flex flex-row inline items-center gap-4 p-1 hover:bg-accent/50 transition-colors'>
                                <span className='font-semibold dark:text-accent-foreground p-3 rounded-sm' >
                                    <img src={item.image} alt={item.title} className="w-8 h-8 object-contain"/>
                                </span>
                                <div className="flex flex-col">
                                    <p className='text-lg font-semibold'> {item.title} </p>
                                    <p className='text-sm dark:text-gray-300'> {item.description} </p>
                                </div>
                                <div className='ml-auto' >
                                        <p className='text-xs text-end dark:text-gray-300'> {item.date} </p>
                                </div>                              
                           </a> 
                        ))
                    }
                </div>
            </div>
            <div className=' flex-1 p-4 border border-accent rounded-md dark:bg-[#1b1b1b] dark:border-gray-600'>
                Contact me
                <a href='/' className='p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/20 group'>
                    < div className='relative'>
                        <img src={profil} alt={profil} className="w-10 h-10 rounded-full object-contain"/>
                        <FaFacebook className="w-4 h-4 text-blue-500 absolute -bottom-1 -right-1 dark:text-white "/>
                    </div>
                    <div className='mr-auto'>
                        <div className='flex items-center gap-2'>
                            <p className='text-lg font-semibold'> Sufyane Ramseyn </p>
                        </div>
                        <p className='text-xs dark:text-gray-300'> 17'0000 </p>
                    </div>
                    <ArrowUpRight className='group-hover:translate-x-2 group-hover:-transate-y-2 transition-transform' size={16} />
                </a>
                <a href='/' className='p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/20 group'>
                    < div className='relative'>
                        <img src={profil} alt={profil} className="w-10 h-10 rounded-full object-contain"/>
                        <FaTwitter className="w-4 h-4 text-sky-500 absolute -bottom-1 -right-1 dark:text-white "/>
                    </div>
                    <div className='mr-auto'>
                        <div className='flex items-center gap-2'>
                            <p className='text-lg font-semibold'> Sufyane Ramseyn </p>
                        </div>
                        <p className='text-xs dark:text-gray-300'> 20'000 </p>
                    </div>
                    <ArrowUpRight className='group-hover:translate-x-2 group-hover:-transate-y-2 transition-transform' size={16} />
                </a>

            </div>
        </div>
    </div>
  )
}

export default Status

{/* 
    <div className='p-3 bg-accent/10'>
       < div className='relative'>
        <img src={profil} alt={profil} className="w-10 h-10"/>
        <FaFacebook alt={item.title} className="w-4 h-4 absolute -bottom-2 -right-2 "/>
       </div>
       <div className='mr-auto'>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-semibold'> Sufyane Ramseyn </p>
            </div>
            <p className='text-xs dark:text-gray-300'> 178K abonnées </p>
        </div>
        <ArrowUpRight size={16} />
    </div>
 */}