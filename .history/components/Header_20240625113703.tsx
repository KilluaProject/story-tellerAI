import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <Link href={'/'}>
            <h1>Story Teller AI</h1>
            <div>
                <h2>Bringing your stories</h2>
                <div className='relative'>
                    <div>

                    </div>
                </div>
            </div>

        </Link>
    </header>
  )
}

export default Header