import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='container'>
        <Link href={'/'}>
            <h1>Story Teller AI</h1>
            <div className='flex space-x-5 text-3xl lg:text-5xl'>
                <h2>Bringing your stories</h2>
                <div className='relative'>
                    <div className='absolute bg-purple-500 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1'/>
                    <p className='relative text-white'>To life</p>
                </div>
            </div>

        </Link>
    </header>
  )
}

export default Header