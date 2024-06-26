import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <Link href={'/'}>
            <h1>Story Teller AI</h1>
            <div className='flex'>
                <h2>Bringing your stories</h2>
                <div className='relative'>
                    <div className='absolute bg-purple-500 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1 h-10' >
                        <p className='relative text-white'>To</p>
                    </div>
                </div>
            </div>

        </Link>
    </header>
  )
}

export default Header