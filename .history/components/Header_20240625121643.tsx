import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { BookOpen, FilePen } from 'lucide-react'

const Header = () => {
  return (
    <header className='container relative pt-16'>
        <Link href={'/'}>
            <h1 className='text-center text-6xl font-black '>Story Teller AI</h1>
            <div className='flex space-x-5 text-3xl lg:text-5xl justify-center items-center whitespace-nowrap pt-2'>
                <h2 className=''>Bringing your stories</h2>
                <div className='relative'>
                    <div className='absolute bg-purple-500 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1'/>
                    <p className='relative text-white'>To life</p>
                </div>
            </div>
        </Link>
        {/* Nav Icon */}
        <div className='flex gap-2 absolute top-5'>
            <Link href={'/'}>
                <FilePen className='w-8 h-8 lg:w-10 lg:h-10 mx-auto text-purple-500 mt-10 border border-purple-500 rounded-md p-2 hover:opacity-50 cursor-pointer'/>
            </Link>

            <Link href={'/stories'}>
                <BookOpen className='w-8 h-8 lg:w-10 lg:h-10 mx-auto text-purple-500 mt-10 border border-purple-500 rounded-md p-2 hover:opacity-50 cursor-pointer' />
            </Link>
        </div>
    </header>
  )
}

export default Header