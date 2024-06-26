import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <Link href={'/'}>
            <h1>Story Teller AI</h1>

        </Link>
    </header>
  )
}

export default Header